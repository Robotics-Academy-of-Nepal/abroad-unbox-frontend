import React from 'react'
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

const AppStatusTable = () => {
  return (
    <div className="overflow-x-auto w-full px-6 my-4">
      {/* Table section */}
      <table className="table-auto w-full border border-gray-500 text-center bg-gray-800 text-gray-100 shadow-lg rounded-lg">
        <caption className="text-left text-lg mb-2 font-bold text-black">Application Timeline Table</caption>
        {/* <thead className="bg-gray-700 text-gray-200">
          <tr>
            <th className="px-4 py-2 border border-gray-600">University Name</th>
            <th className="px-4 py-2 border border-gray-600">University of Texas at Arlington</th>
          </tr>
        </thead> */}
        <tbody className='text-lg'>
            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">University Name</td>
              <td className="border border-gray-600 px-4 py-2">University of Texas at Arlington</td>
              <td className="border border-gray-600 px-4 py-2">U Cincinnati</td>
              <td className="border border-gray-600 px-4 py-2">Drury University </td>
              <td className="border border-gray-600 px-4 py-2">Florida International </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Transcript Requirement</td>
              <td className="border border-gray-600 px-4 py-2">
                <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>unofficial accepted</option>
                    <option className='p-2'>official required</option>
                    <option className='p-2'>NACES Required</option>
                    <option className='p-2'>Commonapp Submission</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
                <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>unofficial accepted</option>
                    <option className='p-2'>official required</option>
                    <option className='p-2'>NACES Required</option>
                    <option className='p-2'>Commonapp Submission</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
                <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>unofficial accepted</option>
                    <option className='p-2'>official required</option>
                    <option className='p-2'>NACES Required</option>
                    <option className='p-2'>Commonapp Submission</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>unofficial accepted</option>
                    <option className='p-2'>official required</option>
                    <option className='p-2'>NACES Required</option>
                    <option className='p-2'>Commonapp Submission</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Transcript Status</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Unofficial submitted</option>
                    <option className='p-2'>Official submitted</option>
                    <option className='p-2'>NACES submitted</option>
                    <option className='p-2'>WES Submitted</option>
                    <option className='p-2'>Commonapp Submission</option>
                    <option className='p-2'>Sealed Mail Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Unofficial submitted</option>
                    <option className='p-2'>Official submitted</option>
                    <option className='p-2'>NACES submitted</option>
                    <option className='p-2'>WES Submitted</option>
                    <option className='p-2'>Commonapp Submission</option>
                    <option className='p-2'>Sealed Mail Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Unofficial submitted</option>
                    <option className='p-2'>Official submitted</option>
                    <option className='p-2'>NACES submitted</option>
                    <option className='p-2'>WES Submitted</option>
                    <option className='p-2'>Commonapp Submission</option>
                    <option className='p-2'>Sealed Mail Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Unofficial submitted</option>
                    <option className='p-2'>Official submitted</option>
                    <option className='p-2'>NACES submitted</option>
                    <option className='p-2'>WES Submitted</option>
                    <option className='p-2'>Commonapp Submission</option>
                    <option className='p-2'>Sealed Mail Submitted</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">EPT Requirement</td>
              <td className="border border-gray-600 px-4 py-2">DET: 100</td>
              <td className="border border-gray-600 px-4 py-2">
                <ul>
                    <li>DET:100</li>
                    <li>IELTS:7.00</li>
                    <li>TOEFl:90</li>
                    <li>PTE:70</li>
                </ul>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <ul>
                    <li>DET:100</li>
                    <li>IELTS:7.00</li>
                    <li>TOEFl:90</li>
                    <li>PTE:70</li>
                </ul>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <ul>
                    <li>DET:100</li>
                    <li>IELTS:7.00</li>
                    <li>TOEFl:90</li>
                    <li>PTE:70</li>
                </ul>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">EPT Status</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not submitted</option>
                    <option className='p-2'>Official submitted</option>
                    <option className='p-2'>Unofficial submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not submitted</option>
                    <option className='p-2'>Official submitted</option>
                    <option className='p-2'>Unofficial submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not submitted</option>
                    <option className='p-2'>Official submitted</option>
                    <option className='p-2'>Unofficial submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not submitted</option>
                    <option className='p-2'>Official submitted</option>
                    <option className='p-2'>Unofficial submitted</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Personal Essay Prompt</td>
              <td className="border border-gray-600 px-4 py-2">Commonapp Essay</td>
              <td className="border border-gray-600 px-4 py-2">Type the essay's prompt</td>
              <td className="border border-gray-600 px-4 py-2">Type the essay's prompt</td>
              <td className="border border-gray-600 px-4 py-2">Type the essay's prompt</td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Personal Essay Requirement</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">SOP Requirement</td>
              <td className="border border-gray-600 px-4 py-2">Personal Statement: Please share any challenges or other extenuating circumstances experienced during your high school career and what you have done to overcome them.</td>
              <td className="border border-gray-600 px-4 py-2">Type the Essay Prompt</td>
              <td className="border border-gray-600 px-4 py-2">Type the Essay Prompt</td>
              <td className="border border-gray-600 px-4 py-2">Type the Essay Prompt</td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">SOP Status</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">LOR Requirement</td>
              <td className="border border-gray-600 px-4 py-2">Commonapp Counselor Only</td>
              <td className="border border-gray-600 px-4 py-2">2 Required, from prof. (Officially submitted)</td>
              <td className="border border-gray-600 px-4 py-2">2 Required, from prof. (Officially submitted)</td>
              <td className="border border-gray-600 px-4 py-2">2 Required, from prof. (Officially submitted)</td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">LOR 1 Status</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">LOR 2 Status</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">LOR 3 Status</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Told the teachers</option>
                    <option className='p-2'>Teacher has started</option>
                    <option className='p-2'>Teacher has read</option>
                    <option className='p-2'>Teacher has confirmed</option>
                    <option className='p-2'>University has confirmed</option>
                    <option className='p-2'>Submitted</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">LOR Checkup Email to Grad Admission</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Email Started</option>
                    <option className='p-2'>Email Finalized</option>
                    <option className='p-2'>Email Sent</option>
                    <option className='p-2'>Email Reply received</option>
                    <option className='p-2'>Some LOR Submitted</option>
                    <option className='p-2'>All LOR Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
              <option className='p-2'>Not Started</option>
                    <option className='p-2'>Email Started</option>
                    <option className='p-2'>Email Finalized</option>
                    <option className='p-2'>Email Sent</option>
                    <option className='p-2'>Email Reply received</option>
                    <option className='p-2'>Some LOR Submitted</option>
                    <option className='p-2'>All LOR Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
              <option className='p-2'>Not Started</option>
                    <option className='p-2'>Email Started</option>
                    <option className='p-2'>Email Finalized</option>
                    <option className='p-2'>Email Sent</option>
                    <option className='p-2'>Email Reply received</option>
                    <option className='p-2'>Some LOR Submitted</option>
                    <option className='p-2'>All LOR Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Email Started</option>
                    <option className='p-2'>Email Finalized</option>
                    <option className='p-2'>Email Sent</option>
                    <option className='p-2'>Email Reply received</option>
                    <option className='p-2'>Some LOR Submitted</option>
                    <option className='p-2'>All LOR Submitted</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Resume Requirement</td>
              <td className="border border-gray-600 px-4 py-2">Not Required</td>
              <td className="border border-gray-600 px-4 py-2">Professional Required</td>
              <td className="border border-gray-600 px-4 py-2">Not Required</td>
              <td className="border border-gray-600 px-4 py-2">Not Required</td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Resume Status</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Required but submitted</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Completed</option>
                    <option className='p-2'> Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Required but submitted</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Completed</option>
                    <option className='p-2'> Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Required but submitted</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Completed</option>
                    <option className='p-2'> Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Required but submitted</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Completed</option>
                    <option className='p-2'> Submitted</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Bank Balance Requirement</td>
              <td className="border border-gray-600 px-4 py-2">Bank Balance:$43,000 <br/> Statement Req:None</td>
              <td className="border border-gray-600 px-4 py-2">Bank Balance:$40,000 <br/> Statement Req:3 months</td>
              <td className="border border-gray-600 px-4 py-2">Bank Balance:$40,000 <br/> Statement Req:6 months</td>
              <td className="border border-gray-600 px-4 py-2">Bank Balance:$40,000 <br/> Statement Req:3 months</td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Bank Balance Status</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>All Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>All Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>All Submitted</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Started</option>
                    <option className='p-2'>Some Done</option>
                    <option className='p-2'>All Submitted</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Info Session Attend</td>
              <td className="border border-gray-600 px-4 py-2">Next Date</td>
              <td className="border border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-600 px-4 py-2"></td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Info Session Attendance</td>
              <td className="border border-gray-600 px-4 py-2">Yes/Next Session Nov 4, at 4.00 PM</td>
              <td className="border border-gray-600 px-4 py-2">Transcript Requirement</td>
              <td className="border border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-600 px-4 py-2"></td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Application Fee</td>
              <td className="border border-gray-600 px-4 py-2">$75</td>
              <td className="border border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Given</option>
                    <option className='p-2'>Not Given</option>
                    <option className='p-2'>Have to attend other Sessions</option>
                    <option className='p-2'>Commonapp fee waiver</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Application Fee Waiver Request</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Given</option>
                    <option className='p-2'>Not Given</option>
                    <option className='p-2'>Have to attend other Sessions</option>
                    <option className='p-2'>Have to email</option>
                    <option className='p-2'>Commonapp fee waiver</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Given</option>
                    <option className='p-2'>Not Given</option>
                    <option className='p-2'>Have to attend other Sessions</option>
                    <option className='p-2'>Have to email</option>
                    <option className='p-2'>Commonapp fee waiver</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Given</option>
                    <option className='p-2'>Not Given</option>
                    <option className='p-2'>Have to attend other Sessions</option>
                    <option className='p-2'>Have to email</option>
                    <option className='p-2'>Commonapp fee waiver</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Given</option>
                    <option className='p-2'>Not Given</option>
                    <option className='p-2'>Have to attend other Sessions</option>
                    <option className='p-2'>Have to email</option>
                    <option className='p-2'>Commonapp fee waiver</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Document Submission</td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Not Started</option>
                    <option className='p-2'>Partially Submitted</option>
                    <option className='p-2'>All Submitted</option>
                    <option className='p-2'>Official LOR Remain</option>
                    <option className='p-2'>Evaluation Remain</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Given</option>
                    <option className='p-2'>Not Given</option>
                    <option className='p-2'>Have to attend other Sessions</option>
                    <option className='p-2'>Have to email</option>
                    <option className='p-2'>Commonapp fee waiver</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Given</option>
                    <option className='p-2'>Not Given</option>
                    <option className='p-2'>Have to attend other Sessions</option>
                    <option className='p-2'>Have to email</option>
                    <option className='p-2'>Commonapp fee waiver</option>
                </select>
              </td>
              <td className="border border-gray-600 px-4 py-2">
              <select className='bg-gray-900 text-gray-100 border-none'>
                    <option className='p-2'>Given</option>
                    <option className='p-2'>Not Given</option>
                    <option className='p-2'>Have to attend other Sessions</option>
                    <option className='p-2'>Have to email</option>
                    <option className='p-2'>Commonapp fee waiver</option>
                </select>
              </td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Application Submission followup email (Week 1)</td>
              <td className="border border-gray-600 px-4 py-2">Email Sent (Oct 26) 2025</td>
              <td className="border border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-600 px-4 py-2"></td>
            </tr>

            <tr className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2 font-bold">Application Submission followup email (Week 1/2)</td>
              <td className="border border-gray-600 px-4 py-2">Submission confirmed</td>
              <td className="border border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-600 px-4 py-2"></td>
              <td className="border border-gray-600 px-4 py-2"></td>
            </tr>

        </tbody>
      </table>
    </div>
  )
}

export default AppStatusTable