import { typeOfTlp } from "@/app/lib/constant-data";
import RadioInput from "../inputs/radio";

const TLPForm = () => {
  return (
    <form className="max-w-lg mx-auto mt-4 p-6 bg-white rounded-lg shadow-md text-sm font-medium">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="ch"
            className="sm:mr-2 mb-1 sm:mb-0 text-sm font-medium"
          >
            CH
          </label>

          <input
            required
            id="ch"
            name="ch"
            type="number"
            step="0.001"
            className="w-full p-2 border rounded-md"
            placeholder="Enter CH value"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <label
            htmlFor="typeOfTlp"
            className="sm:mr-2 mb-1 sm:mb-0 text-sm font-medium"
          >
            Type of TLP
          </label>

          <select
            required
            id="typeOfTlp"
            name="typeOfTlp"
            className="w-full p-2 border rounded-md"
          >
            {typeOfTlp.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <RadioInput
          label="Door Condition"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
        />

        <RadioInput
          label="Rusting Condition"
          options={[
            { value: "notRusted", label: "Not Rusted" },
            { value: "minorRusted", label: "Minor Rusted" },
            { value: "heavyRusted", label: "Heavy Rusted" },
          ]}
        />

        <RadioInput
          label="Foundation Status"
          options={[
            { value: "ok", label: "OK" },
            { value: "notOk", label: "Not OK" },
          ]}
        />

        <RadioInput
          label="Details Status"
          options={[
            { value: "available", label: "Available" },
            { value: "notAvailable", label: "Not Available" },
          ]}
        />

        <RadioInput
          label="Circuit Diagram"
          options={[
            { value: "available", label: "Available" },
            { value: "notAvailable", label: "Not Available" },
          ]}
        />
      </div>
    </form>
  );
};

export default TLPForm;