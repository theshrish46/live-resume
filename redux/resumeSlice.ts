
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FeaturedSkill, Resume, ResumeCustom, ResumeEducation, ResumeProfile, ResumeProject, ResumeSkills, ResumeWorkExperience } from "./types";
import { RootState } from './store';

export const initialProfile: ResumeProfile = {
    name: "",
    email: "",
    phone: "",
    url: "",
    summary: "",
    location: "",
}

export const initialWorkExperience: ResumeWorkExperience = {
    company: "",
    jobTitle: "",
    date: "",
    description: [],
}

export const initialEducation: ResumeEducation = {
    school: "",
    degree: "",
    date: "",
    gpa: "",
    description: []
}

export const initialProject: ResumeProject = {
    project: "",
    date: "",
    description: []
}

export const initialFeaturedSkill: FeaturedSkill = {
    skill: "",
    rating: 4,
}

export const initialFeaturedSkills: FeaturedSkill[] = Array(6).fill({
    ...initialFeaturedSkill
})

export const initialSkills: ResumeSkills = {
    featuredSkills: initialFeaturedSkills,
    description: []
}

export const initialCustom: ResumeCustom = {
    description: []
}

export const initialResumeState: Resume = {
    profile: initialProfile,
    workExperience: [initialWorkExperience],
    education: [initialEducation],
    projects: [initialProject],
    skills: initialSkills,
    custom: initialCustom

}

export const resumeSlice = createSlice({
    name: 'resume',
    initialState: initialResumeState,
    reducers: {
        changeProfile: (
            draft,
            action: PayloadAction<{ field: keyof ResumeProfile, value: string }>
        ) => {
            const { field, value } = action.payload
            draft.profile[field] = value
        }
    }
})


export const selectResume = (state: RootState) => state.resume;
export const selectProfile = (state: RootState) => state.resume.profile
export const selectWorkExperience = (state: RootState) => state.resume.workExperience
export const selectEducation = (state: RootState) => state.resume.education
export const selectProject = (state: RootState) => state.resume.projects
export const selectSkills = (state: RootState) => state.resume.skills
export const selectCustom = (state: RootState) => state.resume.custom


export default resumeSlice.reducer