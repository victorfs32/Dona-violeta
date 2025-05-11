import { Card, Col, Row } from "antd";
import Mainlayout from "../../Componentes/Layout/Mainlayout";





const Painel = () => {

    const produtos = [
  { id: 1, nome: 'Produto 1', imagem: 'https://via.placeholder.com/300x200', preco: 'R$ 19,90' },
  { id: 2, nome: 'Produto 2', imagem: 'https://via.placeholder.com/300x200', preco: 'R$ 29,90' },
  { id: 3, nome: 'Produto 3', imagem: 'https://via.placeholder.com/300x200', preco: 'R$ 39,90' },
  { id: 4, nome: 'Produto 4', imagem: 'https://via.placeholder.com/300x200', preco: 'R$ 49,90' },
];
    return (
        <Mainlayout>

          <Row gutter={[16, 16]}>
      {produtos.map((produto) => (
        <Col key={produto.id} xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            cover={<img alt={produto.nome} src={produto.imagem} />}
          >
            
          </Card>
        </Col>
      ))}
    </Row>
        </Mainlayout>
        
        
    );
}


export default Painel;