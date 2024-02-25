import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface Settings {
    themeColor: string,
    fontFamily: string,
    fontSize: string,
    documentSize: string,
    formToShow: {
        workExperience: boolean,
        education: boolean,
        projects: boolean,
        skills: boolean,
        custom: boolean,
    };
    formToHeading: {
        workExperience: string,
        education: string,
        projects: string,
        skills: string,
        custom: string,
    };
    formsOrder: ShowForm[],
    showBulletPoints: {
        education: boolean,
        projects: boolean,
        skills: boolean,
        custom: boolean
    };
}

export type ShowForm = keyof Settings["formToShow"]
export type FormWithBulletPoints = keyof Settings["showBulletPoints"]
export type GeneralSettings = Exclude<keyof Settings, "formToShow" | "formToHeading" | "formsOrder" | "showBulletPoints">