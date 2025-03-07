import { Button } from "../components/for_database/jbutton";

import minute_record_icon from "../assets/icons/minute_record_icon.png";
import create_todo_icon from "../assets/icons/create_todo_icon.png";
import send_invite_icon from "../assets/icons/send_invite_icon.png";

import envelope_icon from "../assets/icons/envelope_icon.png";
import linkedin_icon from "../assets/icons/linkedin_icon.png";
import whatsapp_icon from "../assets/icons/whatsapp_icon.png";
import create_note_icon from "../assets/icons/create_note_icon.png";

import globe_icon from "../assets/icons/globe_icon.png";
import globe_2_icon from "../assets/icons/globe_2_icon.png";
import chart_down_icon from "../assets/icons/chart_down_icon.png";
import info_round_icon from "../assets/icons/info_round_icon.png";

import view_more_icon from "../assets/icons/view_more_icon.png";

import option_icon from "../assets/icons/option_icon.png";

import basil_settings_adjust from "../assets/icons/basil_settings-adjust-outline.svg";
import filter_reset from "../assets/icons/filter-reset-icon.svg";
import { Header } from "./Landing";

export default function OneOrganisation() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-screen-2xl flex justify-end gap-4 mb-4 mt-8">
        <button className="flex flex-col justify-center items-center gap-3 text-primary-dark-500 rounded-xl bg-primary-300 p-2.5 text-sm">
          <img src={minute_record_icon} width={24} height={24} alt="" />
          <span>Minute record</span>
        </button>
        <button className="flex flex-col justify-center items-center gap-3 text-primary-dark-500 rounded-xl bg-primary-300 p-2.5 text-sm">
          <img src={create_todo_icon} width={24} height={24} alt="" />
          <span>Create To Do</span>
        </button>
        <button className="flex flex-col justify-center items-center gap-3 text-primary-dark-500 rounded-xl bg-primary-300 p-2.5 text-sm">
          <img src={send_invite_icon} width={24} height={24} alt="" />
          <span>Send Invite</span>
        </button>
      </div>
      <div className="grid grid-cols-4 container mx-auto max-w-screen-2xl gap-4">
        <div className="bg-primary-300 h-[300px] rounded-[20px] flex flex-col justify-center items-center gap-4">
          <div className="bg-primary-100 rounded-full">
            <img
              // src={"https://logo.clearbit.com/" + deal.company.website}
              src={"https://logo.clearbit.com/acme.com"}
              width={100}
              height={100}
              alt=""
              className="w-[100px] h-[100px] rounded-full border"
            />
          </div>
          <div className="text-gray-darkest font-semibold">
            Organization Name
          </div>
          <div className="flex justify-center gap-3">
            <button className="bg-white h-[46px] w-[46px] flex flex-col justify-center items-center gap-3 text-primary-dark-500 rounded-full text-sm">
              <img src={envelope_icon} width={24} height={24} alt="" />
            </button>
            <button className="bg-white h-[46px] w-[46px] flex flex-col justify-center items-center gap-3 text-primary-dark-500 rounded-full text-sm">
              <img src={linkedin_icon} width={24} height={24} alt="" />
            </button>
            <button className="bg-white h-[46px] w-[46px] flex flex-col justify-center items-center gap-3 text-primary-dark-500 rounded-full text-sm">
              <img src={whatsapp_icon} width={24} height={24} alt="" />
            </button>
            <button className="bg-white h-[46px] w-[46px] flex flex-col justify-center items-center gap-3 text-primary-dark-500 rounded-full text-sm">
              <img src={create_note_icon} width={24} height={24} alt="" />
            </button>
          </div>
        </div>
        <div className="bg-primary-300 h-[300px] rounded-[20px] col-span-3 p-6 flex flex-col justify-start gap-5">
          <div className="flex justify-between">
            <span>Individual contacts</span>
            <div className="flex justify-end gap-3">
              <Button>Import contacts</Button>
              <Button>Add new contacts</Button>
              {/* <AddContactModal/> */}
            </div>
          </div>
          <div className="w-full grid grid-cols-3 gap-2">
            <div className="bg-primary-100 rounded-2xl h-[150px] p-2 flex flex-col justify-center gap-1.5">
              <div className="flex justify-start items-center gap-2.5">
                <img
                  src="https://i.pravatar.cc/100"
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <span>B.Bonnell</span>
              </div>
              <div className="grid grid-cols-2 text-sm gap-y-1.5">
                <div className="flex flex-col">
                  <span>Titre</span>
                  <span>CEO</span>
                </div>
                <div className="flex flex-col">
                  <span>Tel</span>
                  <span>+27833823520</span>
                </div>
                <div className="flex flex-col col-span-2">
                  <span>Email</span>
                  <span>jeremy@inclusivitysolutions.com</span>
                </div>
              </div>
            </div>
            <div className="bg-primary-100 rounded-2xl h-[150px] p-2 flex flex-col justify-center gap-1.5">
              <div className="flex justify-start items-center gap-2.5">
                <img
                  src="https://i.pravatar.cc/100"
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <span>B.Bonnell</span>
              </div>
              <div className="grid grid-cols-2 text-sm gap-y-1.5">
                <div className="flex flex-col">
                  <span>Titre</span>
                  <span>CEO</span>
                </div>
                <div className="flex flex-col">
                  <span>Tel</span>
                  <span>+27833823520</span>
                </div>
                <div className="flex flex-col col-span-2">
                  <span>Email</span>
                  <span>jeremy@inclusivitysolutions.com</span>
                </div>
              </div>
            </div>
            <div className="bg-primary-100 rounded-2xl h-[150px] p-2 flex flex-col justify-center gap-1.5">
              <div className="flex justify-start items-center gap-2.5">
                <img
                  src="https://i.pravatar.cc/100"
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <span>B.Bonnell</span>
              </div>
              <div className="grid grid-cols-2 text-sm gap-y-1.5">
                <div className="flex flex-col">
                  <span>Titre</span>
                  <span>CEO</span>
                </div>
                <div className="flex flex-col">
                  <span>Tel</span>
                  <span>+27833823520</span>
                </div>
                <div className="flex flex-col col-span-2">
                  <span>Email</span>
                  <span>jeremy@inclusivitysolutions.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-row-3 grid-cols-4 gap-4">
          <div className="p-6 row-span-3 bg-primary-300 rounded-3xl">
            <span className="block mb-8">About Inclusivity Solution</span>

            <div className="flex flex-col justify-start gap-4 ">
              <div className="flex justify-start gap-2 text-sm">
                <img
                  src={globe_icon}
                  alt=""
                  width={24}
                  height={24}
                  className="max-w-6 max-h-6"
                />
                <div className="flex flex-col justify-start gap-1">
                  <span className="font-medium">Country</span>
                  <span>Senegal</span>
                </div>
              </div>
              <div className="flex justify-start gap-2 text-sm">
                <img
                  src={globe_2_icon}
                  alt=""
                  width={20}
                  height={20}
                  className="max-w-5 max-h-5"
                />
                <div className="flex flex-col justify-start gap-1">
                  <span className="font-medium">Website</span>
                  <span>www.jennings.com</span>
                </div>
              </div>
              <div className="flex justify-start gap-2 text-sm">
                <img
                  src={chart_down_icon}
                  alt=""
                  width={20}
                  height={20}
                  className="max-w-5 max-h-5"
                />
                <div className="flex flex-col justify-start gap-1">
                  <span className="font-medium">Financial services</span>
                  <span>tim.jennings@example.com</span>
                </div>
              </div>
              <div className="flex justify-start gap-2 text-sm">
                <img
                  src={info_round_icon}
                  alt=""
                  width={24}
                  height={24}
                  className="max-w-6 max-h-6"
                />
                <div className="flex flex-col justify-start gap-1">
                  <span className="font-medium">Description</span>
                  <span>
                    Inclusivity Solutions Provides Digital Insurance for the
                    Connected, but Unprotected. Delivering Simple & Affordable
                    Insurance via Mobile Phones.
                  </span>
                </div>
              </div>
              <div className="flex justify-start gap-5 flex-wrap mt-6">
                <div className="flex justify-start gap-1 text-sm">
                  <span className="inline-block w-[10px] h-[10px] rounded bg-[#4568F2]"></span>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="font-medium">Pipeline</span>
                    <span>Initial pipeline</span>
                  </div>
                </div>
                <div className="flex justify-start gap-1 text-sm">
                  <span className="inline-block w-[10px] h-[10px] rounded bg-[#DE4841]"></span>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="font-medium">Label</span>
                    <span>Hot</span>
                  </div>
                </div>
                <div className="flex justify-start gap-1 text-sm">
                  <span className="inline-block w-[10px] h-[10px] rounded bg-[#EBBC46]"></span>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="font-medium">Stage</span>
                    <span>Unlisted</span>
                  </div>
                </div>
                <div className="flex justify-start gap-1 text-sm">
                  <span className="inline-block w-[10px] h-[10px] rounded bg-[#66BD50]"></span>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="font-medium">Type of stakeholder</span>
                    <span>Prospect</span>
                  </div>
                </div>
                <div className="flex justify-start gap-1 text-sm">
                  <span className="inline-block w-[10px] h-[10px] rounded bg-[#2BB19C]"></span>
                  <div className="flex flex-col justify-start gap-1">
                    <span className="font-medium">Owner</span>
                    <span>Jeremy Leach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 row-span-3 col-span-2 bg-primary-300 rounded-3xl">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xl font-medium">Last news</span>
              <div className="flex justify-center items-center gap-3">
                <span>View more</span>
                <img
                  src={view_more_icon}
                  alt=""
                  width={36}
                  height={36}
                  className="max-w-9 max-h-9"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-2">
              <div className="h-[130px] w-full rounded-3xl bg-primary-100 flex justify-start gap-1 text-sm p-5">
                <img
                  // src={"https://logo.clearbit.com/" + deal.company.website}
                  src={"https://logo.clearbit.com/acme.com"}
                  width={40}
                  height={40}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border"
                />
                <div className="flex flex-col justify-start gap-1 w-full">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Inclusivity Solutions</span>
                    <span>27/1/2025</span>
                  </div>
                  <span>Inclusivity Solutions Triumphs at VivaTech 2024</span>
                </div>
              </div>
              <div className="h-[130px] w-full rounded-3xl bg-primary-100 flex justify-start gap-1 text-sm p-5">
                <img
                  // src={"https://logo.clearbit.com/" + deal.company.website}
                  src={"https://logo.clearbit.com/acme.com"}
                  width={40}
                  height={40}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border"
                />
                <div className="flex flex-col justify-start gap-1 w-full">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Vivatechnology</span>
                    <span>27/1/2025</span>
                  </div>
                  <span>Vivatech Award</span>
                </div>
              </div>
              <div className="h-[130px] w-full rounded-3xl bg-primary-100 flex justify-start gap-1 text-sm p-5">
                <img
                  // src={"https://logo.clearbit.com/" + deal.company.website}
                  src={"https://logo.clearbit.com/acme.com"}
                  width={40}
                  height={40}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border"
                />
                <div className="flex flex-col justify-start gap-1 w-full">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Inclusivity Solutions</span>
                    <span>27/1/2025</span>
                  </div>
                  <span>
                    {" "}
                    NewTech Friday: Inclusivity Solutions – Embedded insurance
                    solutions for an emerging Africa
                  </span>
                </div>
              </div>
              <div className="h-[130px] w-full rounded-3xl bg-primary-100 flex justify-start gap-1 text-sm p-5">
                <img
                  // src={"https://logo.clearbit.com/" + deal.company.website}
                  src={"https://logo.clearbit.com/acme.com"}
                  width={40}
                  height={40}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border"
                />
                <div className="flex flex-col justify-start gap-1 w-full">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Inclusivity Solutions</span>
                    <span>27/1/2025</span>
                  </div>
                  <span> Inclusivity Solutions Triumphs at VivaTech 2024</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 row-span-2 bg-primary-300 rounded-3xl">
            <div className="flex justify-between items-center mb-3 h-2/6">
              <span className="text-xl font-medium">Tasks & Activities</span>
              <div className="flex justify-center items-center gap-3">
                <span>View more</span>
                <img
                  src={view_more_icon}
                  alt=""
                  width={24}
                  height={24}
                  className="max-w-6 max-h-6"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2 h-4/6">
              <div className="flex flex-col items-center justify-center px-6 py-5 rounded-3xl">
                <span className="font-bold text-primary-dark-400">
                No activity  and task Click here to add an activity
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 row-span-1 bg-primary-300 rounded-3xl flex flex-col justify-start gap-3">
            <div className="flex justify-start items-start flex-col gap-3">
              <span className="text-xl font-medium">AI Agent</span>
              <span className="text-sm">
                This deal has been stagnant for 14 days. Would you like to
                schedule a follow-up or explore why it's stalled?
              </span>
            </div>
            <div className="flex justify-center gap-1">
              <span className="inline-block w-3 h-[5.54px] bg-primary-dark-500 rounded-full"></span>
              <span className="inline-block w-3 h-[5.54px] bg-primary-dark-500/25 rounded-full"></span>
              <span className="inline-block w-3 h-[5.54px] bg-primary-dark-500/25 rounded-full"></span>
            </div>
            <div className="flex justify-between">
              <Button className="bg-transparent text-gray-dark border-2 border-primary">
                Decline
              </Button>
              <Button>Approve</Button>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-primary-300 rounded-3xl px-7 py-6">
          <div className="text-sl font-medium mb-5">Interactions</div>
          <div className="flex justify-between w-full h-11 mb-5">
            <span className="flex items-center gap-1">
              <img
                src={basil_settings_adjust}
                width={21}
                height={21}
                alt="basil settings adjust outline"
              />
              <span>Search filter</span>
            </span>
            <div className="flex justify-start gap-1 text-sm w-9/12">
              <select
                name="pipeline_select"
                id="pipeline_selct"
                className="p-2 bg-primary-50 rounded-xl min-w-[152px] outline-none"
              >
                <option value="">Messages</option>
              </select>
              <select
                name="pipeline_select"
                id="pipeline_selct"
                className="p-2 bg-primary-50 rounded-xl min-w-[152px] outline-none"
              >
                <option value="">Oral</option>
              </select>
              <select
                name="pipeline_select"
                id="pipeline_selct"
                className="p-2 bg-primary-50 rounded-xl min-w-[152px] outline-none"
              >
                <option value="">Todo</option>
              </select>
              <select
                name="pipeline_select"
                id="pipeline_selct"
                className="p-2 bg-primary-50 rounded-xl min-w-[152px] outline-none"
              >
                <option value="">Event</option>
              </select>
              <div>
                <input
                  name="pipeline_select"
                  id="pipeline_selct"
                  placeholder="Search by keywords"
                  className="p-2 bg-primary-50 rounded-xl min-w-[270px] min-h-11  ` outline-none"
                />
                <Button small className="ml-2">
                  Search
                </Button>
              </div>
            </div>
            <Button
              small
              icon={
                <img
                  src={filter_reset}
                  width={20}
                  height={20}
                  alt="filter reset icon"
                />
              }
              icon_position="left"
              className="text-gray-darkest"
            >
              Reset filters
            </Button>
          </div>
          <div className="flex justify-start flex-col gap-4">
            <div className="grid grid-cols-10 gap-2 font-medium px-6">
              <span className="col-span-2">Title/Subject</span>
              <span>Type</span>
              <span>Subtype</span>
              <span>Created by</span>
              <span>Owner</span>
              <span>Assigned to</span>
              <span>Due date</span>
              <span>Attachments</span>
              <span>Actions</span>
            </div>
            <div className="flex justify-start flex-col gap-1">
              <div className="flex justify-center font-medium mt-10">
                <span>No interaction yet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
