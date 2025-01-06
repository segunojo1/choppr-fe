

interface ToggleSwitchProps {
  isEnabled: boolean;
  onToggle: (value: boolean) => void;
  label?: string;
}

const ToggleSwitch = ({ isEnabled, onToggle, label }: ToggleSwitchProps) => {
  return (
    <div className="flex items-center space-x-3 mt-10 mb-6 w-fit mx-auto">
      <label htmlFor="toggle-switch" className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          id="toggle-switch"
          checked={isEnabled}
          onChange={(e) => onToggle(e.target.checked)}
          className="sr-only peer"
        />
        <div
          className="w-11 h-6 bg-[#181E29] border border-[#353C4A] rounded-full  peer-focus:ring-2 peer-focus:ring-[#144EE3] transition-colors"
        ></div>
        <div
          className="absolute w-4 h-4 bg-white peer-checked:bg-[#144EE3] rounded-full transition-transform transform peer-checked:translate-x-5"
        ></div>
      </label>
      {label && <span className="text-[#C9CED6]">{label}</span>}
    </div>
  );
};

export default ToggleSwitch;
