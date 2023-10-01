const express = require("express");
const app = express();
var bodyparser = require("body-parser");
var cookieparser = require("cookie-parser");
var path = require("path");
const { emitWarning } = require("process");
const modelo = require("./model/modelogeral.JS");
const escolasschema = require("./model/modelPesquisa.JS");
const diacritics = require("diacritics");

let ano = "2023";

let data = "";
let anos  = "";
let norte = "";
let nordeste = "";
let centro = "";
let sul = "";
let sudeste = "";
let projeto = "";
let escola = "";
let escola2 = "";
let escola3 = "";
let total = "";

function FunctionTotal (novoTotal) {
  total = novoTotal;
}
function escolas2 (novaEscola2) {
  escola2 = novaEscola2;
}

function escolas3 (novaEscola3) {
  escola3 = novaEscola3;
}

function escolas (novaEscola) {
  escola = novaEscola;
}

function projetos (novoProjeto) {
  projeto = novoProjeto;
}

function mudadata (novoDado){
data = novoDado;
}
function mudaanos(novoAnos){
  anos = novoAnos;
}
function mudaNorte(novoNorte){
  norte = novoNorte;
}
function mudaNordeste(novoNordeste){
  nordeste = novoNordeste;
}
function mudaCentro(novoCentro) {
  centro = novoCentro;
}
function mudaSul(novoSul){
  sul = novoSul;
}
function mudaSudeste(novoSudeste){
  sudeste = novoSudeste;
}


app.use(cookieparser());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, function () {
  console.log("conexão inicializada");
});

app.get("/", async function (req, res) {
  res.render("home.ejs");
});


app.get('/pesquisa', async (req, res) => {
  const pesquisa = req.query.pesquisa || '';

  try {
    const resultados = await escolasschema.find({
      $or: [
        { Escola: { $regex: pesquisa, $options: 'i' } },
        { Cidade: { $regex: pesquisa, $options: 'i' } },
        { Estado: { $regex: pesquisa, $options: 'i' } },
        { Premios: { $regex: pesquisa, $options: 'i' } },
        { Orientadores: { $regex: pesquisa, $options: 'i' } },
        { Anos: { $regex: pesquisa, $options: 'i' } }
      ]
    });

    

    res.render('pesquisa.ejs', { resultados, pesquisa });

  } catch (err) {
    console.error(err);
    res.send('Erro ao buscar escolas');
  }
});




app.get("/inicio", async function (req, res){
  mudadata('424');
  mudaNorte('48');
  mudaSul('72');
  mudaSudeste('140');
  mudaNordeste('118');
  mudaCentro('46')
  mudaanos('escolas foram premiadas no período 2023-2018')
  projetos('1300')
  FunctionTotal('projetos foram premiados no período 2023-2018')
  escolas('As escolas Fundação Técnica Liberato Salzano Vieira da Cunha (Novo Hamburgo, RS) e IFRS - Campus Osório (Osório, RS) foram premiadas, individualmente, 30 vezes no período 2023-2018.')
  escolas2('A escola Colégio Dante Alighieri (São Paulo, SP) foi premiada 24 vezes no período 2023-2018.')
  escolas3('A escola Colégio Estadual Jardim Porto Alegre - Unidade II (Toledo, PR) foi premiada 23 vezes no período 2023-2018.')
  res.render("acessar.ejs",{data:data, anos:anos, norte:norte, sul:sul, sudeste:sudeste, nordeste:nordeste, centro:centro, projeto:projeto, escola:escola, escola2:escola2, escola3:escola3, total:total});
});

app.post("/2023",async function (req, res) {
  mudadata('97');
  mudaNorte('12');
  mudaSul('19');
  mudaSudeste('30');
  mudaNordeste('29');
  mudaCentro('7')
  mudaanos('escolas foram premiadas no ano de 2023')
  FunctionTotal('projetos foram premiados no ano de 2023')
  projetos('232')
  escolas('As escolas Colégio Dante Alighieri (São Paulo, SP), Colégio Estadual Jardim Porto Alegre - Unidade II (Toledo, PR), IFRS - Campus Osório (Osório, RS) e Escola Santa Terezinha (Imperatriz, MA) foram premiadas, individualmente, 7 vezes no ano de 2023  ')
  escolas2('As escolas E.E.M.T.T. Marconi Coelho Reis (Cascavel, CE), E.E.E.P. Antonio Rodrigues de Oliveira (Pedra Branca, CE), Colégio Bom Jesus Diocesano (Lages, SC), IFRJ - Campus Rio de Janeiro (Rio de Janeiro, RJ), IF Baiano - Campus Catu (Catu, BA) e Escola Alef Peretz - Unidade Paraisópolis (São Paulo, SP) foram premiadas, individualmente, 5 vezes no ano de 2023.')
  escolas3('As escolas Centro Estadual de Capacitação de Educadores e Atendimento ao Surdo (Mossoró, RN), Fundação Escola Técnica Liberato Salzano Vieira da Cunha (Novo Hamburgo, RS), Colégio Militar do Recife (Recife, PE), Colégio Militar de Curitiba (Curitiba, PR), Etec Polivalente de Americana (Americana, SP), E.E.M. Governador Adauto Bezerra (Juazeiro Do Norte, CE), Colégio Diocesano Santa Luzia (Mossoró, RN), Colégio Degraus (Jundiaí, SP), Escola SESI - Unidade Prata (Campina Grande, PB), Colégio São Francisco de Sales Diocesano (Teresina, PI), IFES - Campus Vila Velha (Vila Velha, ES) e Escola Sesi Djalma Pessoa (Salvador, BA) foram premiadas, individualmente, 4 vezes no ano de 2023  ')
  res.render("acessar.ejs",{data:data, anos:anos,norte:norte, sul:sul, sudeste:sudeste, nordeste:nordeste, centro:centro, projeto:projeto, escola:escola, escola2:escola2, escola3:escola3, total:total});
  ano = "2023";
  });

app.post("/2022",async function (req, res) { 
  mudadata('122');
  mudaNorte('6');
  mudaSul('19');
  mudaSudeste('56');
  mudaNordeste('33');
  mudaCentro('8')
  mudaanos('escolas foram premiadas no ano de 2022')
  projetos('220')
  FunctionTotal('projetos foram premiados no ano de 2022')
  escolas(' A escola IFRS - Campus Osório da cidade de Osório do Rio Grande do Sul (RS) foi premiada 7 vezes no ano de 2022.')
  escolas2('A escola Escola Santa Teresinha da cidade de Imperatriz do Maranhão (MA) foi premiada 6 vezes no ano de 2022.')
  escolas3('A escola Colégio Estadual Jardim Porto Alegre - Unidade II da cidade Toledo do Paraná (PR) foi premiada 5 vezes no ano de 2022.')
  res.render("acessar.ejs",{data:data, anos:anos,norte:norte, sul:sul, sudeste:sudeste, nordeste:nordeste, centro:centro, projeto:projeto, escola:escola, escola2:escola2, escola3:escola3, total:total});
  ano = "2022";
});

app.post("/2021",async function (req, res) {
  mudadata('100');
  mudaNorte('8');
  mudaSul('17');
  mudaSudeste('35');
  mudaNordeste('30');
  mudaCentro('10')
  projetos('196')
  mudaanos('escolas foram premiadas no ano de 2021')
  FunctionTotal('projetos foram premiados no ano de 2021')
  escolas('As escolas Colégio Técnico de Campinas - UNICAMP (Campinas, SP) e Colégio Estadual Prefeito Anfilófio Fernandes Viana (Umbauba, SE) foram premiadas, individualmente, 8 vezes no ano de 2021.')
  escolas2('A escola Colégio Dante Alighieri (Sao Paulo, SP) foi premiada 7 vezes em 2021.')
  escolas3('As escolas CEFET-MG - Unidade Contagem (Contagem, MG), Instituto Federal de Educação Ciência E Tecnologia De Brasília - Campus Brasília (Brasilia, DF) e IFRS - Campus Osório (Osório, RS) foram premiadas, individualmente, 5 vezes no ano de 2021.')
  res.render("acessar.ejs",{data:data, anos:anos,norte:norte, sul:sul, sudeste:sudeste, nordeste:nordeste, centro:centro, projeto:projeto, escola:escola, escola2:escola2, escola3:escola3, total:total});
  ano = "2021";
});

app.post("/2020",async function (req, res) {
  mudadata('109');
  mudaNorte('15');
  mudaSul('19');
  mudaSudeste('30');
  mudaNordeste('31');
  mudaCentro('14')
  mudaanos('escolas foram premiadas no ano de 2020')
  FunctionTotal('projetos foram premiados no ano de 2020')
  projetos('200')
  escolas('A escola Colégio Militar (Recife, PE) foi premiada 7 vezes no ano de 2020.')
  escolas2('A escola Fundação Escola Técnica Liberato Salzano Vieira da Cunha (Novo Hamburgo, RS) foi premiada 6 vezes no ano de 2020.')
  escolas3('As escolas E.E.M. Ronaldo Caminha Barbosa (Cascaval, CE) e CEFET-MG - Unidade BH - Campus II (Belo Horizonte, BH) foram premiadas, individualmente, 5 vezes no ano de 2020.')
  res.render("acessar.ejs",{data:data, anos:anos,norte:norte, sul:sul, sudeste:sudeste, nordeste:nordeste, centro:centro, projeto:projeto, escola:escola, escola2:escola2, escola3:escola3, total:total});
  ano = "2020";
});

app.post("/2019",async function (req, res) {
  mudadata('88');
  mudaNorte('11');
  mudaSul('17');
  mudaSudeste('27');
  mudaNordeste('27');
  mudaCentro('6')
  mudaanos('escolas foram premiadas no ano de 2019')
  FunctionTotal('projetos foram premiados no ano de 2019')
  projetos('243')
  escolas('A escola Fundação Escola Técnica Liberato Salzano Vieira da Cunha (Novo Hamburgo, RS) foi premiada 9 vezes em 2019.')
  escolas2('As escolas IFTO - Campus Araguaína (Araguaína, TO), Colégio Estadual Jardim Porto Alegre - Unidade II (Toledo, PR), IFRS - Campus Osório (Osório, RS) e E.E. Culto à Ciência (Campinas, SP) foram premiadas, individualmente, 7 vezes no ano de 2019.')
  escolas3('As escolas E.E. Monsenhor Raimundo Gurgel (Mossoró, RN) e E.E.E.M. Prof ª Ernestina Pereira Maia (Moju, PA) foram premidas, individualmente, 6 vezes no ano de 2019')
  res.render("acessar.ejs",{data:data, anos:anos,norte:norte, sul:sul, sudeste:sudeste, nordeste:nordeste, centro:centro, projeto:projeto, escola:escola, escola2:escola2, escola3:escola3, total:total});
  ano = "2019";
});

app.post("/2018",async function (req, res) {
  mudadata('86');
  mudaNorte('10');
  mudaSul('18');
  mudaSudeste('28');
  mudaNordeste('17');
  FunctionTotal('projetos foram premiados no ano de 2018')
  mudaCentro('13')
  mudaanos('escolas foram premiadas no ano de 2018')
  projetos('209')
  escolas('A escola E.E.E.M. Profa. Ernestina Pereira Maia (Moju, PA) foi premiada 8 vezes no ano de 2018.')
  escolas2('A escola Instituto Federal de Educação Ciência E Tecnologia Do Rio Grande Do Sul - Campus Osório (Osório, RS) foi premiada 7 vezes no ano de 2018.')
  escolas3('As escolas Escola Nova Lourenço Castanho (), Colégio Interativa (Londrina, PR), Colégio Paraíso (Juazeiro do Norte, CE) e Fundação Escola Técnica Liberato Salzano Vieira da Cunha (Novo Hamburgo, RS) foram premiadas, individualmente, 6 vezes no ano de 2018.')
  res.render("acessar.ejs",{data:data, anos:anos,norte:norte, sul:sul, sudeste:sudeste, nordeste:nordeste, centro:centro, projeto:projeto, escola:escola, escola2:escola2, escola3:escola3, total:total});
  ano = "2018";
});


app.get("/AC", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Acre (AC)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/AL", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Alagoas (AL)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/AP", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Amapá (AP)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/AM", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Amazonas (AM)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/BA", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Bahia (BA)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/CE", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Ceará (CE)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/DF", async function (req, res) {
  try {
    const docs = await modelo.find({
      Estado: "Distrito federal (DF)",
      Ano: ano,
    });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/ES", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Espírito Santo (ES)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/GO", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Goiás (GO)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/MA", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Maranhão (MA)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/MT", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Mato Grosso (MT)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/MS", async function (req, res) {
  try {
    const docs = await modelo.find({
      Estado: "Mato Grosso do Sul (MS)",
      Ano: ano,
    });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/MG", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Minas Gerais (MG)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/PA", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Pará (PA)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/PB", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Paraíba (PB)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/PR", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Paraná (PR)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/PE", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Pernambuco (PE)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/PI", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Piauí (PI)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/RJ", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Rio de Janeiro (RJ)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/RN", async function (req, res) {
  try {
    const docs = await modelo.find({
      Estado: "Rio Grande do Norte (RN)",
      Ano: ano,
    });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/RS", async function (req, res) {
  try {
    const docs = await modelo.find({
      Estado: "Rio Grande do Sul (RS)",
      Ano: ano,
    });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/RO", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Rondônia (RO)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/RR", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Roraima (RR)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/SC", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Santa Catarina (SC)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/SP", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "São Paulo (SP)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/SE", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Sergipe (SE)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
app.get("/TO", async function (req, res) {
  try {
    const docs = await modelo.find({ Estado: "Tocantins (TO)", Ano: ano });
    res.render("index.ejs", { Usuario: docs, Ano:ano });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários");
  }
});
