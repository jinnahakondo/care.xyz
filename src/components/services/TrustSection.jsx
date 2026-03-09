import { FiCheckCircle } from "react-icons/fi";

export default function TrustSection() {
  return (
    <div className="max-w-xl space-y-6">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-neutral">
        Why families trust Care.xyz
      </h2>

      {/* Feature List */}
      <div className="space-y-6">
        {/* Item 1 */}
        <div className="flex gap-4">
          {/* Icon */}
          <FiCheckCircle className="text-blue-500 text-2xl mt-1" />

          {/* Text Content */}
          <div>
            <h3 className="font-semibold text-lg">
              Comprehensive Background Checks
            </h3>
            <p className="text-base-content">
              Every caregiver undergoes a rigorous 7-point background screening
              process.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-4">
          {/* Icon */}
          <FiCheckCircle className="text-blue-500 text-2xl mt-1" />

          {/* Text Content */}
          <div>
            <h3 className="font-semibold text-lg">24/7 Support Team</h3>
            <p className="text-base-content">
              Our care coordinators are available around the clock to assist
              you.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-4">
          {/* Icon */}
          <FiCheckCircle className="text-blue-500 text-2xl mt-1" />

          {/* Text Content */}
          <div>
            <h3 className="font-semibold text-lg">
              Personalized Care Matching
            </h3>
            <p className="text-base-content">
              We find caregivers whose personalities and skills match your
              specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
