import InputField from "@/components/forms/InputField";

interface FormContainerProps {
  title: string;
  formData: { [key: string]: string };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  fields: { label: string; type: string; name: string; textarea?: boolean }[];
  buttonText: string;
  footer?: React.ReactNode;
  statusMessage?: string;
}

export default function FormContainer({
  title,
  formData,
  handleChange,
  handleSubmit,
  fields,
  buttonText,
  footer,
  statusMessage,
}: FormContainerProps) {
  return (
    <div className="flex flex-col m-auto">
      <div className="min-w-[412px] sm:min-w-[512px] max-w-md mx-auto mt-8 p-6 bg-stone-800 rounded-lg shadow-lg">
        <h2 className="text-center mb-4">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <InputField
              key={field.name}
              label={field.label}
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              textarea={field.textarea}
            />
          ))}
          <button type="submit" className="btn btn-warning w-full">
            {buttonText}
          </button>
        </form>
        {statusMessage && (
          <p className="text-center mt-4 text-yellow-400">{statusMessage}</p>
        )}
        {footer && (
          <div className="text-center mt-4 text-gray-400">{footer}</div>
        )}
      </div>
    </div>
  );
}
