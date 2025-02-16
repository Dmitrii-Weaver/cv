import { Typography } from "@mui/material";
import React from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../timeline/timeline"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import resumeData from "../../utils/resumeData";
import './profile.css'
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomButton from "../button/button"
import GetAppIcon from '@mui/icons-material/GetApp';

import Mailbutton from '../mailbutton/mailbutton';
import { HomeRounded, Telegram } from '@mui/icons-material';

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline_content">
            {link ? (
                <Typography className="timeline_text"><span>{title}:</span> <a href={link} target="_blank">{text}</a></Typography>
            ) : (
                <Typography className="timeline_text"><span>{title}:</span> {text}</Typography>
            )}
        </TimelineContent>

    </TimelineItem>
);



const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>
            <figure className="profile_image">
                <img src={require("../../assets/images/display.jpg")} alt="" />
            </figure>
            <div className="profile_info">
                <CustomTimeline icon={<PersonOutlineIcon />} >
                    <CustomTimelineItem title={"Name"} text={resumeData.name} />
                    <CustomTimelineItem title={"DOB"} text={resumeData.birthday} />
                    <CustomTimelineItem title={"Occupation"} text={resumeData.job} />
                    <CustomTimelineItem title={"Email"} text={resumeData.email} />
                    {Object.keys(resumeData.socials).map((key) => (
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
                    ))}
                </CustomTimeline>
                <div className="button_holder">
                    <a onClick={(e) => {window.location.href = "mailto:dmitriitkachev11@gmail.com"; e.preventDefault();}} > <CustomButton text="Reach out" icon={<Telegram />} className='custom_button_text'
                        to='#'
                        /> </a>
                </div>
            </div>
        </div>
    )
}

export default Profile