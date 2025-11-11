import { buscarCriaturas } from "./chamadas-api.js";
import { botaoCriaturas } from "./elementos-html.js";

botaoCriaturas.addEventListener('click', buscarCriaturas)