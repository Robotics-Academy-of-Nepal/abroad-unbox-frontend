import React from 'react'

const StudentDocument = () => {
  return (
    <div>
        <form>
            
        <div>
          <h3 className="text-lg font-medium text-gray-800">Documents</h3>
          {formData.docs.map((_, index) => (
            <div key={index} className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Document {index + 1}
              </label>
              <input
                type="file"
                name={`doc${index}`}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          ))}
        </div>
        
        </form>
    </div>
  )
}

export default StudentDocument