import { ITextInput } from '../../types/inputField';

export default function InputField(props: ITextInput) {
    const { label, placeholder, error, height, borderRadius, onKeyDown, registerKey, register } = props;
    return (
        <div className='mt-5'>
            <h3 className="text-black text-lg pl-5">{label}</h3>
            <input
                className="w-[470px] bg-[#F5F5F5] pl-5 mt-0 border-0 focus:outline-none focus:ring-0 text-black"
                type="text"
                placeholder={placeholder}
                style={{
                    height: height ? height : '49px',
                    borderRadius: borderRadius ? borderRadius : '30px',
                }}
                onKeyDown={onKeyDown} // Add onKeyPress event here
                {...register(registerKey)}
            />
            {error && (
                <p className="text-red-500 text-right pr-5 text-sm mt-2">{error}</p>
            )}
        </div>
    );
}


