import React from "react";
import EachUtils from "../../../../Utils/EachUtils";
import { LIST_CTA_EN, LIST_CTA_ID } from "../../../../constants/listCTA";
import { useAtom } from "jotai";
import { languageAtom } from "../../../../jotai/atoms";
import DefaultButton from "../DefaultButton";

const InputMembership = () => {
  const [language] = useAtom(languageAtom);

  return (
    <form>
      <EachUtils
        of={language === "id" ? LIST_CTA_ID : LIST_CTA_EN}
        render={(item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <div className="relative flex justify-center items-center gap-2 py-4">
              <input
                type="text"
                placeholder={item.labelInput}
                className="w-full p-4 bg-black/50 border border-white/50 rounded-md peer placeholder-transparent"
              />
              <label className="absolute top-0 left-0 pl-4 peer-placeholder-shown:top-8 peer-focus:top-[20px] transition-all text-lg">
                {item.labelInput}
              </label>
              <DefaultButton
                text={item.buttonSubmit}
                isArrowIcon={true}
                styles="w-1/2 flex py-4 justify-center items-center gap-2 text-xl"
              />
            </div>
          </div>
        )}
      />
    </form>
  );
};

export default InputMembership;
