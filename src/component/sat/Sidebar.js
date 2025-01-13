import React, { useState } from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
  const [readingDropdown, setReadingDropdown] = useState(false);

  return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 p-4 md:border-r-2 md:border-[#020346] shadow-md shadow-black">
          {/* Verbal Section */}
          <div>
            <h2 className="font-bold text-lg cursor-pointer">
              Verbal
            </h2>
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <button
                    className="text-blue-500 hover:text-[#07096D] hover:text-semibold"
                    onClick={() => setReadingDropdown(!readingDropdown)}
                  >
                    <Link to="/sat/reading">Reading</Link>
                  </button>
                  {readingDropdown && (
                    <ul className="pl-4 mt-1 space-y-1">
                      <li>
                        <Link
                          to="/contextual-evidence"
                          className="text-blue-500 hover:text-[#07096D] hover:text-semibold block"
                        >
                          Contextual Evidence
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/inference"
                          className="text-blue-500 hover:text-[#07096D] hover:text-semibold block"
                        >
                          Inference
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/grammar" className="text-blue-500 hover:text-[#07096D] hover:text-semibold">
                    Grammar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vocabulary"
                    className="text-blue-500 hover:text-[#07096D] hover:text-semibold"
                  >
                    Vocabulary
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sectional-test"
                    className="text-blue-500 hover:text-[#07096D] hover:text-semibold"
                  >
                    Sectional Test
                  </Link>
                </li>
                <li>
                  <Link
                    to="/full-length-test"
                    className="text-blue-500 hover:text-[#07096D] hover:text-semibold"
                  >
                    Full Length Test
                  </Link>
                </li>
              </ul>
          </div>

          {/* Quant Section */}
          <div className="mt-6">
            <h2 className="font-bold text-lg cursor-pointer">
              Quant
            </h2>
            <ul className="pl-4 mt-2 space-y-2">
              <li>
                <Link to="/basic" className="text-blue-500 hover:text-[#07096D] hover:text-semibold">
                  The Basic
                </Link>
              </li>
              <li>
                <Link to="/algebra" className="text-blue-500 hover:text-[#07096D] hover:text-semibold">
                  Algebra
                </Link>
              </li>
              <li>
                <Link
                  to="/advance-math"
                  className="text-blue-500 hover:text-[#07096D] hover:text-semibold"
                >
                  Advance Math
                </Link>
              </li>
              <li>
                <Link
                  to="/sectional-test-quant"
                  className="text-blue-500 hover:text-[#07096D] hover:text-semibold"
                >
                  Sectional Test
                </Link>
              </li>
              <li>
                <Link
                  to="/full-length-test-quant"
                  className="text-blue-500 hover:text-[#07096D] hover:text-semibold"
                >
                  Full Length Test
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
