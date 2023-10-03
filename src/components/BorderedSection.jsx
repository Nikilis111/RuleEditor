import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import "./BorderedSection.scss";

function BorderedSection({ icon, title, children }) {
    return (
        <div className="bordered-section">
            <div className="header">
                <div className="header-border-before"></div>
                {(icon || title) && (
                    <div className="header-title">
                        {icon && <SvgIcon component={icon} />}
                        {title && <span>{title}</span>}
                    </div>
                )}
                <div className="header-border-after"></div>
            </div>
            <div className="children-container">{children}</div>
        </div>
    );
}

export default BorderedSection;
