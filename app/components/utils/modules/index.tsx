import React from "react";

/* css */
import styles from "@/css/utils.module.css";

/* fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors, faArrowRight } from "@fortawesome/free-solid-svg-icons";

/* 見出し -h2 */
type HeadLabelProps = {
  title: string;
};

const HeadLabel = ({ title }: HeadLabelProps) => {
  return (
    <h2 className={styles.headLabel}>
      <FontAwesomeIcon icon={faScissors} className={styles.headLabelIcon} />
      <span className={styles.headLabelText}>{title}</span>
    </h2>
  );
};

/* ボタン */
type PrimaryBtnProps = {
  text: string;
  isBg: boolean;
};

const PrimaryBtn = ({ text, isBg = false }: PrimaryBtnProps) => {
  return (
    <React.Fragment>
      <div className={`${isBg ? styles.bgPrimaryBtn : ""} ${styles.primaryBtn}`}>
        {text}
        <FontAwesomeIcon icon={faArrowRight} className={styles.primaryBtnIcon} />
      </div>
    </React.Fragment>
  );
};

/* ボタン */
type SecondaryBtnProps = {
  text: string;
};

const SecondaryBtn = ({ text }: SecondaryBtnProps) => {
  return (
    <React.Fragment>
      <div className={styles.secondaryBtn}>{text}</div>
    </React.Fragment>
  );
};

/* section */
type SectionAreaProps = {
  children: React.ReactNode;
  isBackground: boolean;
};

const SectionArea = ({ children, isBackground = false }: SectionAreaProps) => {
  return (
    <section className={isBackground ? styles.bgContainer : styles.container}>
      <div className={styles.containerInner}>{children}</div>
    </section>
  );
};

/* checkbox */
type CheckboxProps = {
  id: string;
  value: string;
  name: string;
  onChange: () => void;
};

const Checkbox = ({ id, value, name, onChange }: CheckboxProps) => {
  return (
    <React.Fragment>
      <input id={id} type="checkbox" name={name} value={value} onChange={onChange}></input>
      <label htmlFor={id} className={styles.checkLabel}>
        {value}
      </label>
    </React.Fragment>
  );
};

/* ページの上部へ移動（Link） */
const LinkPageTop = () => {
  window.scrollTo({
    top: 0,
  });
};

export { HeadLabel, PrimaryBtn, SecondaryBtn, Checkbox, SectionArea, LinkPageTop };
