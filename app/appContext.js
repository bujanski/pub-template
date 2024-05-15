import { createContext } from "react";

export const appContext = createContext(null);

export const appInitialData = {
    userLoggedIn: false,
    showNewJobModal: false,
    toolbarOptions: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote"],
        ["link"],
        [{ align: [] }],

        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],

        ["clean"],
    ],
    aboutTags: [
        "Brand identity",
        "Community engagement",
        "Financials",
        "Health and wellness",
        "Hiring",
        "Inclusion and belonging",
        "Reporting",
        "Safety",
        "Security",
        "Sustainability",
        "Talent acquisition",
        "Technology",
    ],
    xyzersTags: [
        "Brand identity",
        "Community engagement",
        "Financials",
        "Health and wellness",
        "Hiring",
        "Inclusion and belonging",
        "Reporting",
        "Safety",
        "Security",
        "Sustainability",
        "Talent acquisition",
        "Technology",
    ],
    aboutLocations: [
        "The first place",
        "The second place",
        "The third place",
        "The fourth place",
        "The fifth place",
        "The sixth place",
        "The seventh place",
        "The eighth place",
    ],
    xyzersLocations: [
        "The first place",
        "The second place",
        "The third place",
        "The fourth place",
        "The fifth place",
        "The sixth place",
        "The seventh place",
        "The eighth place",
    ]
};
