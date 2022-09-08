import { React } from "react";
import ProgrammingLang from "../../helpers/ProgrammingLang";
import { motion } from "framer-motion";
import Text from "../../helpers/lang/Text";
import {
  cardLanguageAnimated,
  languageBarAnimated,
  textLanguageAnimated,
} from "../../helpers/Animation";

export const Languages = () => {
  return !ProgrammingLang ? (
    <div></div>
  ) : (
    <div className="row mt-4 mb-3 p-3" style={{ background: "#11202b" }}>
      <motion.h3
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 1 }}
        variants={textLanguageAnimated}
        className="text-white fw-700 text-center"
      >
        <Text tid="programmingLang" />
      </motion.h3>
      {ProgrammingLang.map((lang) => {
        return (
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 1 }}
            transition={{ staggerChildren: 0.5 }}
            className="col-lg-4 col-md-12 mt-3"
            key={lang.name}
          >
            <motion.div
              variants={cardLanguageAnimated}
              className="card bg-dark shadow shadow-2 text-white"
            >
              <div
                className={`card-body border-bottom border-${lang.color} border-3`}
              >
                <motion.div
                  variants={textLanguageAnimated}
                  className="card-title"
                >
                  {lang.name}
                </motion.div>
                <div className="progress">
                  <motion.div
                    variants={languageBarAnimated}
                    className={`progress-bar bg-${lang.color}`}
                    role="progressbar"
                    aria-label={lang.name}
                    aria-valuenow={lang.experience}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{
                      width: `${lang.experience}%`,
                      position: "relative",
                      right: `calc(100% - ${lang.experience}%)`,
                      paddingLeft: `calc(100% - ${lang.experience}%)`,
                    }}
                  >
                    {lang.name}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
