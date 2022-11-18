const defaultCurrency = ['RUB', 'USD', 'EUR', 'GBR']

interface IBlockProps {
    value: number,
    currency: any,
    onChangeCurrency: (cur:any)=>void,
    onChangeValue: (value: any) => void
}

export const Block = ({ value, currency, onChangeCurrency, onChangeValue }: IBlockProps) => {
    return (
        <div className="block">
        <ul className="currencies">
            {defaultCurrency.map((cur)=>(
                <li
                    onClick={()=>onChangeCurrency(cur)}
                    className={currency === cur ? 'active' : ''}
                    key={cur}
                    >
                    {cur}
                </li>
            ))}
            <li>
                <svg height="50px" viewBox="0 0 50 50" width="50px">
                <rect fill="none" height="50" width="50" />
                <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
                </svg>
            </li>
        </ul>
        <input 
            type="number" 
            onChange={(e)=>onChangeValue(e.target.value)}
            value={value}
            placeholder={'0'}   
        />
    </div>
    )  
}