interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  textarea?: boolean;
}

export default function InputField({
  label,
  type,
  name,
  value,
  onChange,
  textarea,
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-base font-semibold text-neutral-100 mb-1">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="input text-lg input-bordered bg-stone-700 text-neutral-200  w-full"
          rows={3}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="input text-lg input-bordered bg-stone-700 text-neutral-200  w-full"
        />
      )}
    </div>
  );
}
