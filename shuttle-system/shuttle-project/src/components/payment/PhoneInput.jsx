function PhoneInput({ value, onChange }) {
  return (
    <div className="pay-num-input">
      <span id="pay-prefix">+233</span>
      <input
        type="tel"
        placeholder="24 000 0000"
        maxLength={10}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default PhoneInput