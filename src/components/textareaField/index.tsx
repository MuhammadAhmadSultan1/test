import { ITextInput } from '../../types/inputField';

export default function TextareaField(props: ITextInput) {
    const { label, placeholder, value, onChange, error, height, borderRadius } = props;
    return (
        <div className='mt-5'>
            <h3 className="text-black text-lg pl-5">{label}</h3>
            <textarea
                className="w-[470px] bg-[#F5F5F5] pl-5 mt-3 border-0 focus:outline-none focus:ring-0 text-black pt-3 pr-3"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{
                    height: height,
                    borderRadius: borderRadius,
                    resize: 'none'
                }}
            ></textarea>
            {error && (
                <p className="text-red-500 text-right pr-5 text-sm">{error}</p>
            )}
        </div>
    );
}
