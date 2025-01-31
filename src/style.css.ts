import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const container = style({
  display: "flex",
  flexDirection: "column",
});

const box = style({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: "0 1rem 0 1rem",
});

const bottomBtn = style({
  background: "white",
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
  textAlign: "center",
});

const products = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "space-between",
  padding: "0 1rem 0 1rem",
});

const product = style({
  flex: "1 1 calc(50% - 1rem)",
  maxWidth: "50%",
  boxSizing: "border-box",
  backgroundColor: "#F2F9FF",
  borderRadius: "24px",
  padding: "12px 0 0 12px",
  display: "flex",
  justifyContent: "space-between",
  minHeight: "100px",
  border: "2px solid #F2F9FF",

  "@media": {
    "(max-width: 360px)": {
      maxWidth: "100%",
      flex: "1 1 100%",
    },
  },
});

const productTitle = style({
  fontSize: "16px",
  "@media": {
    "(max-width: 360px)": {
      fontSize: "15px",
    },
  },
});

const productIcon = style({
  alignSelf: "end",
});

const swSlide = recipe({
  base: {
    minWidth: "58px",
    maxWidth: "max-content",
    height: "32px",
    backgroundColor: "#F8F8F8",
    padding: "8px 16px",
    borderRadius: "1rem",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    textAlign: "center",
    color: "#6F6F6F",
    transition: "all .25s ease",
    display: "flex",
    alignItems: "center",
    marginRight: "12px",
    "@media": {
      "(max-width: 360px)": {
        fontSize: "14px",
      },
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: "#000",
        color: "#FFF",
      },
    },

    default: {
      true: {
        background: "#FFEFD9",
        color: "#FF6838",
      },
    },
  },
});

const serviceContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const appSt = {
  bottomBtn,
  container,
  box,
  products,
  productTitle,
  product,
  productIcon,
  swSlide,
  serviceContainer,
};
