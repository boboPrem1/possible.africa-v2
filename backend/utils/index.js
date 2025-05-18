const jwt = require("jsonwebtoken");

class CustomUtils {
  static consts = {
    MISSING_DATA: "Missing Data",
    DUPLICATED_DATA: "Duplicating Data Not Allowed",
    NOT_EXIST: "Not Exist",
    INVALID_CREDENTIALS: "Invalid Credentials",
    METHOD_NOT_ALLOWED: "Method not allowed",
    EXISTING_ACCOUNT: "An account exists corresponding to datas send",
    NOT_FOUND: "Not Found",
    TOKEN_KEY: "miam_auth",
    SUCCESS: "Success",
    UNAUTHORIZED: "Unauthorized",
    NOT_LOGGED_IN: "You are not logged in! Please log in to get access.",
    EXISTING_POST_WITH_SOURCE: "Un article existe avec une source identique",
  };

  // Auth static methods
  static signToken = (id, exp) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: exp ? exp : "7d",
    });
  };

  static verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
  };

  static getUserInId = (req) => {
    const token = req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : null;
    const decoded = CustomUtils.verifyToken(token);
    return decoded.id;
  };

  static generateUsername = () => {
    const generatedNumber = Math.round(Math.random() * 999999);
    const usernameSlugs = [
      "awesome",
      "great",
      "amazing",
      "fantastic",
      "cool",
      "nice",
      "good",
      "best",
      "super",
      "strong",
    ];
    const username = `${usernameSlugs[Math.round(Math.random() * 9)]
      }_${generatedNumber}`;
    return username;
  };

  // static advancedQuery = (query) => {
  //   const queryObj = { ...query };
  //   console.log("queryObj", queryObj);
  //   const excludedFields = [
  //     "page",
  //     "sort",
  //     "limit",
  //     "fields",
  //     "_end",
  //     "_start",
  //     "possible",
  //     "response_mode",  
  //   ];

  //   // country array filter
  //   if (queryObj.countries) {
  //     const countries = queryObj.countries.split(",");
  //     queryObj.countries = { $in: countries };
  //   }

  //   excludedFields.forEach((element) => {
  //     delete queryObj[element];
  //   });

  //   const queryObjKeys = Object.keys(queryObj);
  //   queryObjKeys.map((item) => {
  //     if (!(queryObj[item].length === 24 && queryObj[item].includes("64"))) {
  //       if (queryObj[item].length > 0) {
  //         const regex = new RegExp(queryObj[item], "i");
  //         // console.log(regex);
  //         queryObj[item] = { $regex: regex };
  //       } else {
  //         delete queryObj[item];
  //       }
  //     }
  //   });
  //   return queryObj;
  // };

  static advancedQuery = (query) => {
    const queryObj = { ...query };

    const excludedFields = [
      "page",
      "sort",
      "limit",
      "fields",
      "_end",
      "_start",
      "possible",
      "response_mode",
    ];

    // Exclusion des champs non liés au filtrage
    excludedFields.forEach((field) => {
      delete queryObj[field];
    });

    // Gestion du filtre pays
    // if (query.countries) {
    //   delete queryObj["countries"];
    //   const countriesArray = query.countries.split(",");
    //   queryObj.countries = { $in: countriesArray };
    // }


    // Gestion du filtre pays
    // if (query.countries) {
    //   delete queryObj["countries"];
    //   queryObj.content = { $regex: new RegExp(query.countries, "i") };
    //   // const countriesArray = query.countries.split(",");
    //   // queryObj.countries = { $in: countriesArray };
    // }

    // Transformation des champs restants en regex, sauf ObjectID (présumé)
    for (const key of Object.keys(queryObj)) {
      const value = queryObj[key];

      // On ignore les objets (comme $in) ou les vrais ObjectIds (présumés ici par format)
      if (
        typeof value === "string" &&
        !(value.length === 24 && /^[a-f0-9]+$/i.test(value))
      ) {
        if (value.length > 0) {
          if (key === "countries") {
            // Si le champ est "countries", on le traite différemment
            const countries = value;
            delete queryObj[key];

            queryObj['title'] = { $regex: new RegExp(countries, "i") };
          } else if (key === 'airTags') {
            // Si le champ est "tags", on le traite différemment
            const tagsArray = value.split(", ");

            queryObj['airTags'] = { $in: tagsArray };
          } else
            
            {
            queryObj[key] = { $regex: new RegExp(value, "i") };
          }
        } else {
          delete queryObj[key];
        }
      }
    }

    return queryObj;
  };


  static advancedQueryAirtable = (query) => {
    const queryObj = { ...query };
    const excludedFields = [
      "page",
      "sort",
      "limit",
      "fields",
      "_end",
      "_start",
    ];
    excludedFields.forEach((element) => {
      delete queryObj[element];
    });
    return queryObj;
  };

  static slugify = (from = "") => {
    return from.toLowerCase().split(" ").join("-");
  };

  static getRandomNbr(max = 9999999) {
    // return Math.round((Math.random() * max));
    return "";
  }
}

module.exports = CustomUtils;
