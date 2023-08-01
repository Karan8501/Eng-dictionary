import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
const index = () => {
    return (
        <footer className="footer">
            <p>
                Made by{" "}
                <a
                    href="https://github.com/Karan8501"
                    target="_blank"
                    rel="noreferrer"
                >
                    Karan Chauhan
                </a>

            </p>
            <div className="social-links">
                <a href="https://github.com/Karan8501">
                    <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/karan-25568620a">
                    <LinkedInIcon />
                </a>
                <a href="mailto:karan.e21@nsut.com">
                    <AttachEmailIcon />
                </a>
            </div>
        </footer>
    );
};

export default index;
