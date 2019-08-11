import React from "react";

import logo from "../assets/logo.svg";

import * as S from "./styles";

export default function Login() {
  return (
    <>
      <S.Container>
        <form>
          <img src={logo} alt="Tindev" />
          <input placeholder="Digite seu usuário do github" />
          <button action="submit">Login</button>
        </form>
      </S.Container>
    </>
  );
}
