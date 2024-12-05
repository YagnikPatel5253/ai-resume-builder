import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from '../[resumeId]/edit/preview/PersonalDetailPreview'
import SummeryPreview from '../[resumeId]/edit/preview/SummeryPreview'
import ExperiencePreview from '../[resumeId]/edit/preview/ExperiencePreview'
import EducationalPreview from '../[resumeId]/edit/preview/EducationalPreview'
import SkillsPreview from '../[resumeId]/edit/preview/SkillsPreview'

function ResumePreview() {
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]' style={{
      borderColor:resumeInfo?.themeColor
    }}>
      {/* Personal Detail */}
      <PersonalDetailPreview resumeInfo={resumeInfo}/>
      {/* Summary */}
      <SummeryPreview resumeInfo={resumeInfo}/>
      {/* Proffesional Experience */}
      <ExperiencePreview resumeInfo={resumeInfo}/>
      {/* Education */}
      <EducationalPreview resumeInfo={resumeInfo}/>
      {/* {Skills} */}
      <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview