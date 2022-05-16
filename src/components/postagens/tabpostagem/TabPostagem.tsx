import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography, Box } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listapostagem/ListaPostagem";
import "./TabPostagem.css";

function TabPostagem() {
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography
            variant="h3"
            gutterBottom
            component="h5"
            align="center"
            className="p1"
          >
            Sobre-nós
          </Typography>

          <Typography className="sbr">
            Olá! Me chamo Victor Oliveira e atualmente me formei em um bootcamp
            de 3 meses da Generation Brasil, no curso de Desenvolvedor Java Full
            Stack. Pretendo continuar meus estudos em programação web,
            principalmente em front-end, tenho vontade de aprimorar meus
            conhecimentos nas linguagems JavaScript, HTML, CSS e em frameworks
            tipo React e Angular. Estou aberto a novas oportunidades de estudo,
            trabalho e entre outros, aceito também feedbacks. Quem quiser entrar
            em contato comigo irei deixar os meios abaixo para comunicação.
            Agradeço pela visita e muito obrigado a todos. 😀
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
