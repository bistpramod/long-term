import type { ITextInputProps } from "./Form.contract";

export const TextInput = ({type = 'text', name, className='', errMsg="", handleChange}: Readonly<ITextInputProps>) => {
  // 
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={`Enter your ${name}....`}
        // onChange={() => {}}
        onChange={handleChange}
        className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className}`}
      />
      <span className="text-red-800 text-sm italic">{errMsg}</span>
    </>
  );

}