import React from 'react'
import { useSelector } from "react-redux"

import { selectProfessionalDetails } from '@/redux/slices/profDetails';

const ProfessionalInfo = () => {
  const professionalDetails = useSelector(selectProfessionalDetails);
  return (
    <div className="grid grid-cols-2 grid-rows-3 ">
      {/* first row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">Designation</h2>
        <p className="font-semibold text-base">{professionalDetails.selectedDesignation}</p>
      </span>
      <span>
        <h2 className="text-gray-400">Department</h2>
        <p className="font-semibold text-base">{professionalDetails.selectedDepartment}</p>
      </span>

      {/* second row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">PF Number</h2>
        <p className="font-semibold text-base">{professionalDetails.pfNumber}</p>
      </span>
      <span>
        <h2 className="text-gray-400">UAN Number</h2>
        <p className="font-semibold text-base">{professionalDetails.uanNumber}</p>
      </span>

      {/* third row  */}
      <span className="mb-4">
        <h2 className="text-gray-400">Direct Reporting Manager</h2>
        <p className="font-semibold text-base">{professionalDetails.selectedReportingMngr}</p>
      </span>
      <span>
        <h2 className="text-gray-400">Work location</h2>
        <p className="font-semibold text-base">{professionalDetails.selectedworkLocation}</p>
      </span>

    </div>
  )
}

export default ProfessionalInfo