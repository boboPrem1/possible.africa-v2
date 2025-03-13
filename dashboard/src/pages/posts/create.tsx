import React, { useEffect, useState } from "react";
import {
  file2Base64,
  IResourceComponentsProps,
  useApiUrl,
} from "@refinedev/core";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, message, Select, Upload } from "antd";
// import BasicEditor from "../../components/Editors/basic";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../components/Editors/styles.css";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";
import { UploadProps } from "antd/lib/upload";
import { Option } from "antd/es/mentions";
import { axiosInstance } from "../../custom-data-provider/data-provider";
import TinyMCEEditor from "../../custom-components/editor";
import axios from "axios";

const ENV = import.meta.env.VITE_NODE_ENV;
const API_URL =
  ENV === "developement"
    ? import.meta.env.VITE_BACKEND_DEV
    : import.meta.env.VITE_BACKEND_PROD;

// export async function imageUploadHandler(image: any) {
//   try {
//     // build form data
//     const bf = await fetch(image);
//     const blob = await bf.blob();
//     const file = new File([blob], "image." + blob.type.split("/")[1], {
//       type: blob.type,
//     });
//     const data = new FormData();
//     data.append("image", file);

//     // send post request
//     const response = await axiosInstance.post(`${API_URL}/upload/images`, data);

//     // return the image url
//     const imageUrl = response.data.url;
//     return imageUrl;
//   } catch (error) {
//     console.error("Erreur lors de l'upload d'image:", error);
//     message.error("Échec de l'upload d'image. Veuillez réessayer.");
//     return null;
//   }
// }

// export async function imageUploadHandler(image: any) {
//   try {
    
//     const bf = await fetch(image);
//     const blob = await bf.blob();
    
//     console.log(bf);
//     const data = new FormData();
//     data.append("image", blob, "image." + image.split(";")[0].split("/")[1]);

//     console.log(data);

//     const response = await axiosInstance.post(`${API_URL}/upload/images`, data);

//     return response.data.url;
//   } catch (error) {
//     console.error("Erreur lors de l'upload d'image:", error);
//     message.error("Échec de l'upload d'image. Veuillez réessayer.");
//     return null;
//   }
// }

export async function imageUploadHandler(base64Image: string) {
  try {
    // Convertir la chaîne base64 en Blob
    const response = await fetch(base64Image);
    const blob = await response.blob();

    // Construire un objet File à partir du Blob
    const fileExtension = blob.type.split("/")[1] || "png";
    const file = new File([blob], `image.${fileExtension}`, {
      type: blob.type,
    });
    console.log(file);
    // Construire FormData
    const data = new FormData();
    data.append("image", file);
    
    for (const pair of data.entries()) {
      console.log(pair[0] + ':', pair[1]); 
    }

    // Envoi de la requête POST
    const res = await axios.post(`${API_URL}/upload/images`, data);

    // Renvoyer l'URL de l'image téléchargée
    return res.data.url;

  } catch (error) {
    console.error("Erreur lors de l'upload d'image:", error);
    message.error("Échec de l'upload d'image. Veuillez réessayer.");
    return null;
  }
}


export const reactQuillModules = {
  toolbar: {
    container: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video", "formula"],
      ["clean"],
    ],
  },
};

export const PostCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, queryResult, onFinish } = useForm();
  const [editorContent, setEditorContent] = useState("");
  const [imageUrl, setImageUrl] = useState<string>();
  const [uploadLoading, setUploadLoading] = useState(false);
  const apiUrl = useApiUrl();

  const { selectProps: authorSelectProps } = useSelect({
    resource: "users",
    optionLabel: "complete_name",
    optionValue: "_id",
  });

  const { selectProps: categorieSelectProps } = useSelect({
    resource: "post_categories",
    optionLabel: "name",
    optionValue: "_id",
  });

  const { selectProps: labelSelectProps } = useSelect({
    resource: "post_labels",
    optionLabel: "name",
    optionValue: "_id",
  });

  const { selectProps: organisationsSelectProps } = useSelect({
    resource: "organisations",
    optionValue: "_id",
    optionLabel: "name",
  });

  const { selectProps: editorSelectProps } = useSelect({
    resource: "organisations",
    optionValue: "_id",
    optionLabel: "name",
  });

  const { selectProps: countrySelectProps } = useSelect({
    resource: "countries",
    optionValue: "_id",
    optionLabel: "translations.fra.common",
  });

  async function onSubmitCapture(values: any) {
    try {
      let contentToSend = editorContent || "";
      let imgTags = contentToSend.match(/<img[^>]+src="([^">]+)"/g);

      if (imgTags && imgTags.length > 0) {
        let imgs = imgTags.map((imgTag) => {
          const src = imgTag.match(/src="([^">]+)"/)?.[0] || "";
          return {
            base64: src.replace('src="', "").replace('"', ""),
            url: "",
          };
        });

        // Traiter toutes les images en parallèle
        await Promise.all(
          imgs.map(async (img) => {
            if (img.base64.startsWith("data:")) {
              const url = await imageUploadHandler(img.base64);
              if (url) {
                contentToSend = contentToSend.replace(img.base64, url);
              }
            }
          })
        );
      }

      // Préparer les données à envoyer
      const dataToSubmit = {
        ...values,
        content: contentToSend,
        image: imageUrl,
        airMedia: "Possible Africa",
        status: "published",
        airDateAdded: new Date(),
        airLogo: "https://possibledotafrica.s3.eu-west-3.amazonaws.com/users/images/1741258403971-possible_avatar.png",
        airTrans: values?.airLanguage === "FR" ? "fr" : "eng",
      };

      onFinish(dataToSubmit);
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      message.error("Une erreur est survenue lors de la soumission du formulaire");
    }
  }

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("Vous pouvez uniquement télécharger des fichiers JPG/PNG!");
      return Upload.LIST_IGNORE;
    }
    
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("L'image doit être inférieure à 2MB!");
      return Upload.LIST_IGNORE;
    }
    
    return true;
  };

  const handleChange: UploadProps["onChange"] = async (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === 'uploading') {
      setUploadLoading(true);
      return;
    }
    
    if (info.file.status === 'done') {
      try {
        // Vérifier que originFileObj existe et est un Blob valide
        if (!info.file.originFileObj || !(info.file.originFileObj instanceof Blob)) {
          throw new Error("Fichier invalide ou non disponible");
        }

        // console.log(info);
        
        const base64 = await file2Base64(info.file as RcFile);

        // console.log(base64);
        const url = await imageUploadHandler(base64);
        if (url) {
          setImageUrl(url);
          message.success("Image téléchargée avec succès");
        }
      } catch (error) {
        console.error("Erreur lors du téléchargement:", error);
        message.error("Échec du téléchargement de l'image");
      } finally {
        setUploadLoading(false);
      }
    }
  };

  const uploadButton = (
    <div>
      {uploadLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Télécharger</div>
    </div>
  );

  return (
    <Create
      saveButtonProps={saveButtonProps}
    >
      <Form {...formProps} layout="vertical" onFinish={onSubmitCapture}>
        <Form.Item
          label="Titre"
          name={["title"]}
          rules={[
            {
              required: true,
              message: "Le titre est obligatoire",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Source (Votre post est il associé à une source extérieur ? Collez le lien vers la souce.)"
          name={["airLink"]}
        >
          <Input />
        </Form.Item>

        <Form.Item 
          label="Langue" 
          name={["airLanguage"]}
          rules={[
            {
              required: true,
              message: "La langue est obligatoire",
            },
          ]}
        >
          <Select>
            <Option value="FR">Français</Option>
            <Option value="ENG">Anglais</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Contenu"
          name={["content"]}
          className="advancedEditor"
          style={{
            height: "600px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <TinyMCEEditor
            content=""
            id="create_possible_post"
            onContentChange={setEditorContent}
          />
        </Form.Item>
        
        <Form.Item 
          label="Couverture" 
          name="image"
          rules={[
            {
              required: true,
              message: "L'image de couverture est obligatoire",
            },
          ]}
        >
          <Upload
            name="file"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            customRequest={({ file, onSuccess }) => {
              // Simuler une requête réussie pour gérer l'upload manuellement
              setTimeout(() => {
                onSuccess && onSuccess("ok");
              }, 0);
            }}
          >
            {imageUrl ? (
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: "5%",
                    right: "5%",
                    bottom: "5%",
                    backgroundColor: "tomato",
                    color: "white",
                    textAlign: "center",
                    padding: "2px",
                    borderRadius: "4px",
                  }}
                >
                  Modifier
                </span>
              </div>
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        
        <Form.Item
          label="Etiquette(s) (S'il y'en a plusieurs veuillez les séparer avec virgule + espace (, ).)"
          name={["airTags"]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
