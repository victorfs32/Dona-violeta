import React, { useState } from "react";
import { Card, Avatar, Button, Row, Col, Modal, Form, Input } from "antd";
import Mainlayout from "../../Componentes/Layout/Mainlayout";

const { Meta } = Card;

const produtos = [
  {
    id: 1,
    titulo: "Blusa Feminina",
    cor: "Azul Claro",
    tamanho: "M",
    categoria: "Roupas Casuais",
    estoque: 12,
    descricao: "Blusa leve e confortável, ideal para dias quentes. Tecido 100% algodão, com acabamento em renda.",
    imagem: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb2fe681f3874ec59c1597b931112f5a_9366/Camiseta_Own_The_Run_3_Listras_Laranja_JV6520_01_laydown.jpg",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    cliente: {
      nome: "Maria Souza",
      email: "maria.souza@email.com",
      endereco: "Rua Exemplo, 123",
      telefone: "(11) 98765-4321",
      pedido: "Blusa Feminina, Tamanho M",
    },
  },
  {
    id: 2,
    titulo: "Vestido Floral",
    cor: "Vermelho",
    tamanho: "G",
    categoria: "Vestidos",
    estoque: 5,
    descricao: "Vestido longo com estampa floral, perfeito para eventos ao ar livre. Tecido leve e elegante.",
    imagem: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/719215cb95164d319444ac8200d373c4_9366/Blusa_Moletom_Essentials_Fleece_3-Stripes_Azul_GK9111_01_laydown.jpg",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
    cliente: {
      nome: "João Pereira",
      email: "joao.pereira@email.com",
      endereco: "Avenida Brasil, 456",
      telefone: "(21) 91234-5678",
      pedido: "Vestido Floral, Tamanho G",
    },
  },
  {
    id: 3,
    titulo: "Leg Laranja",
    cor: "Laranja",
    tamanho: "M",
    categoria: "Roupas Masculinas",
    estoque: 8,
    descricao: "Blusa de frio masculina, ideal para dias mais frios. Confortável e de fácil manutenção.",
    imagem: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/91021f52382245acabae21b765bd3690_9366/Calca_Legging_3_Listras_Com_Bolso_Laranja_JW1603_01_laydown.jpg",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
    cliente: {
        nome: "Carlos Almeida",
        email: "carlos.almeida@email.com",
        endereco: "Rua São João, 789",
        telefone: "(11) 92345-6789",
        pedido: "Blusa de Frio Masculina, Tamanho M",
    },
  },
    {
    id: 4,
    titulo: "Leg Preto",
    cor: "Preto",
    tamanho: "P",
    categoria: "Roupas Feminina",
    estoque: 12,
    descricao: "Camiseta com estampa exclusiva, confortável e de estilo moderno. Ideal para o dia a dia.",
    imagem: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/423cde9f43fb445193d7f9944a6c1879_9366/CRF_WMN_TIGHT_Borgonha_IM5356_01_laydown.jpg",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=4",
    cliente: {
        nome: "Ana Costa",
        email: "ana.costa@email.com",
        endereco: "Rua das Flores, 123",
        telefone: "(21) 91234-5678",
        pedido: "Camiseta Estampada Unissex, Tamanho P",
    },
    },
        {
    id: 4,
    titulo: "Leg Preto",
    cor: "Preto",
    tamanho: "P",
    categoria: "Roupas Feminina",
    estoque: 12,
    descricao: "Camiseta com estampa exclusiva, confortável e de estilo moderno. Ideal para o dia a dia.",
    imagem: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/adf34bed27ce47bfb56a20c18d12aa0a_9366/Calca_always_Track_Preto_JW9221_01_laydown.jpg",
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=4",
    cliente: {
        nome: "Ana Costa",
        email: "ana.costa@email.com",
        endereco: "Rua das Flores, 123",
        telefone: "(21) 91234-5678",
        pedido: "Camiseta Estampada Unissex, Tamanho P",
    },
    },
];

const Pedidos = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clienteInfo, setClienteInfo] = useState(null);

  // Função para abrir o modal com as informações do cliente
  const showModal = (cliente) => {
    setClienteInfo(cliente);
    setIsModalVisible(true);
  };

  // Função para fechar o modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Funções para os botões
  const emitirNotaFiscal = () => {
    console.log("Emitir Nota Fiscal");
    // Aqui você pode adicionar a lógica de emissão da nota fiscal
  };

  const finalizarPedido = () => {
    console.log("Pedido Finalizado");
    // Aqui você pode adicionar a lógica de finalizar o pedido
  };

  return (
    <Mainlayout>
      <Row gutter={[16, 16]} justify="start">
        {produtos.map((item) => (
          <Col key={item.id}>
            <Card
              style={{ width: 300 }}
              cover={<img alt={item.titulo} src={item.imagem} />}
              actions={[
                <Button
                  type="primary"
                  onClick={() => showModal(item.cliente)}
                >
                  Visualizar
                </Button>,
                <Button
                  danger
                  onClick={() => console.log(`Descartar pedido ${item.id}`)}
                >
                  Descartar
                </Button>,
              ]}
            >
              <Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.titulo}
                description={
                  <>
                    <div><strong>Cor:</strong> {item.cor}</div>
                    <div><strong>Tamanho:</strong> {item.tamanho}</div>
                    <div><strong>Categoria:</strong> {item.categoria}</div>
                    <div><strong>Estoque:</strong> {item.estoque} unidades</div>
                  </>
                }
              />
              <div style={{ marginTop: 12 }}>
                <p>{item.descricao}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal com informações do cliente */}
      <Modal
        title={`Informações do Cliente`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <Form layout="vertical">
          {clienteInfo && (
            <>
              <Form.Item label="Nome">
                <Input value={clienteInfo.nome} readOnly />
              </Form.Item>
              <Form.Item label="Email">
                <Input value={clienteInfo.email} readOnly />
              </Form.Item>
              <Form.Item label="Endereço">
                <Input value={clienteInfo.endereco} readOnly />
              </Form.Item>
              <Form.Item label="Telefone">
                <Input value={clienteInfo.telefone} readOnly />
              </Form.Item>
              <Form.Item label="Pedido">
                <Input value={clienteInfo.pedido} readOnly />
              </Form.Item>
            </>
          )}
        </Form>

        {/* Botões de Emitir Nota Fiscal e Finalizar */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            style={{ backgroundColor: "green", color: "white" }}
            onClick={emitirNotaFiscal}
          >
            Emitir Nota Fiscal
          </Button>
          <Button type="primary" onClick={finalizarPedido}>
            Finalizar
          </Button>
        </div>
      </Modal>
    </Mainlayout>
  );
};

export default Pedidos;
