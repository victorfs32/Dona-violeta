import {
    Space, Table, Col, Modal, Button, Input, Row, Tooltip,
    Form,
    Dropdown,
    message
} from 'antd';

import {
    EditOutlined, DeleteOutlined, PlusOutlined, SearchOutlined,
    DownOutlined,
    FileExcelOutlined,
    SettingOutlined,
    FilterOutlined,

} from '@ant-design/icons';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';

import { useState } from 'react';

import Mainlayout from '../../Componentes/Layout/Mainlayout';

const Produtos = () => {
    const location = useLocation();
    const [mostrarBuscaAvancada, setMostrarBuscaAvancada] = useState(false);
    const [buscaNome, setBuscaNome] = useState('');
    const [buscaTitulo, setBuscaTitulo] = useState('');
    const [buscaApoiador, setBuscaApoiador] = useState('');
    const liderancaSelecionada = location.state?.liderancaSelecionada || null;
    const [eleitores, setEleitores] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idParaExcluir, setIdParaExcluir] = useState(null);

    let navigate = useNavigate();

    const dados = [
        {
            key: '1',
            codigo: 'P001',
            nome: 'Camiseta Branca',
            valor: 39.90,
            estoque: 25,
        },
        {
            key: '2',
            codigo: 'P002',
            nome: 'Calça Jeans',
            valor: 89.90,
            estoque: 12,
        },
        {
            key: '3',
            codigo: 'P003',
            nome: 'Tênis Esportivo',
            valor: 149.90,
            estoque: 8,
        },
        {
            key: '4',
            codigo: 'P004',
            nome: 'Boné Preto',
            valor: 29.90,
            estoque: 30,
        },
        {
            key: '5',
            codigo: 'P005',
            nome: 'Jaqueta de Couro',
            valor: 199.90,
            estoque: 5,
        },
        {
            key: '6',
            codigo: 'P006',
            nome: 'Meia Social',
            valor: 9.90,
            estoque: 100,
        },
        {
            key: '7',
            codigo: 'P007',
            nome: 'Cinto de Couro',
            valor: 49.90,
            estoque: 15,
        },
        {
            key: '8',
            codigo: 'P008',
            nome: 'Blusa Moletom',
            valor: 119.90,
            estoque: 10,
        },
        {
            key: '9',
            codigo: 'P009',
            nome: 'Saia Jeans',
            valor: 69.90,
            estoque: 20,
        },
        {
            key: '10',
            codigo: 'P010',
            nome: 'Vestido Floral',
            valor: 89.90,
            estoque: 18,
        },
    ];



    const toggleBuscacavancada = () => {
        setMostrarBuscaAvancada(!mostrarBuscaAvancada);

    }
    const excluirEleitor = async (id) => {
        const resultado = await deletarEleitor(id);

        if (resultado.sucesso) {
            message.success(resultado.mensagem || "Eleitor excluído com sucesso.");
            await carregarLiderancas(); // Atualiza a lista
        } else {
            message.error(resultado.mensagem || "Erro ao excluir o eleitor.");
        }
    };

    const handleOk = () => {
        excluirEleitor(idParaExcluir);
        setIsModalOpen(false);
        setIdParaExcluir(null);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIdParaExcluir(null);
    };

    const carregarLiderancas = async () => {

        const result = await buscarEleitoresPorLideranca(liderancaSelecionada);
        setEleitores(result)
        console.log(result)

    };


    const items = [
        {
            label: (
                <Link to='/importar_cadastro'>
                    Importar de uma planilha
                </Link>

            ),
            icon: <FileExcelOutlined style={{ color: 'green' }} />,
            key: '0',
        },
        {
            label: (
                <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                    Exportar cadastro
                </a>

            ),
            icon: <FileExcelOutlined style={{ color: 'green' }} />,
            key: '1',
        },
        {
            label: (
                <a href="https://docs.google.com/spreadsheets/d/1jhyx3i0mXYM-v6HRI2lEjBCus9vXIFq-PH2L81_e0tw/export?format=xlsx" target="_blank" rel="noopener noreferrer">
                    Baixar modelo de importação
                </a>

            ),
            icon: <FileExcelOutlined style={{ color: 'green' }} />,
            key: '2',
        },

    ];




    const columns = [
        {
            title: 'Código',
            dataIndex: 'codigo',
            key: 'codigo',
        },
        {
            title: 'Nome',
            dataIndex: 'nome',
            key: 'nome',
        },
        {
            title: 'Valor',
            dataIndex: 'valor',
            key: 'valor',
        },
        {
            title: 'Estoque',
            dataIndex: 'estoque',
            key: 'estoque',
        },


        {
            title: 'Ações',
            key: 'acoes',

            render: (_, record) => (
                <Space>
                    <Tooltip title="Visualizar">
                        <NavLink to={`/visualizar/${record.id}`}>
                            <Button icon={<SearchOutlined />} type="primary" size="small" />
                        </NavLink>
                    </Tooltip>
                    <Tooltip title="Editar">
                        <NavLink to={`/cadastroeleitor/${record.id}`}>
                            <Button icon={<EditOutlined />} type="primary" size="small" style={{ backgroundColor: '#faad14', borderColor: '#faad14' }} />
                        </NavLink>
                    </Tooltip>
                    <Tooltip title="Excluir">
                        <Button
                            icon={<DeleteOutlined />}
                            danger
                            size="small"
                            type="primary"
                            onClick={() => {
                                setIsModalOpen(true);
                                setIdParaExcluir(record.id);

                            }}
                        />
                    </Tooltip>
                </Space>
            ),
        },
    ];
    const dadosFiltrados = eleitores.filter(item =>
        item.nome.toLowerCase().includes(buscaNome.toLowerCase()) &&
        item.titulo.toLowerCase().includes(buscaTitulo.toLowerCase()) &&
        item.bairro.toLowerCase().includes(buscaApoiador.toLowerCase())
    );

    return (
        <Mainlayout titulo="Lista de eleitores">
            <Row gutter={16}  >




            </Row>

            <Row justify={"space-between"} style={{ marginBottom: '16px' }}>


                <Col>
                    <Space>

                        <NavLink to="/cadastroeleitor">
                            <Button type="primary" icon={<PlusOutlined />}>Adicionar</Button>
                        </NavLink>

                        <Dropdown menu={{ items }} trigger={['click']}>
                            <a onClick={e => e.preventDefault()}>
                                <Button>
                                    <Space>
                                        <SettingOutlined />
                                        Mais ações
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </a>
                        </Dropdown>

                    </Space>
                </Col>



                <Col >
                    <Space>
                        <Input
                            placeholder="Buscar eleitor"
                            prefix={<SearchOutlined />}
                            allowClear />


                        <Button onClick={toggleBuscacavancada} type="primary" icon={<FilterOutlined />}>Filtro Avançado</Button>
                    </Space>
                </Col>



            </Row>
            {mostrarBuscaAvancada && (

                <Form layout="vertical" style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <Row
                        gutter={[16, 16]}
                        style={{
                            borderRadius: '8px', border: '1px solid #d9d9d9', padding: '16px', marginLeft: 0,
                            marginRight: 0,
                        }}>


                        <Col span={8}>
                            <Form.Item name="buscarportitulo" label="Buscar por titulo">
                                <Input value={buscaTitulo}
                                    onChange={(e) => setBuscaTitulo(e.target.value)} placeholder="Digite o número do título" />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item name="buscarpornome" label="Buscar por Nome">
                                <Input value={buscaNome}
                                    onChange={(e) => setBuscaNome(e.target.value)} placeholder="Digite o nome do eleitor" />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item name="buscarporapoiador" label="Buscar pelo apoiador">
                                <Input value={buscaApoiador}
                                    onChange={(e) => setBuscaApoiador(e.target.value)} placeholder="Digite o nome do apoiador" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Space>

                                <Button type="primary" htmlType="submit">
                                    Buscar

                                </Button>

                                <Button httptype="primary" htmlType="submit">
                                    Limpar

                                </Button>
                            </Space>
                        </Col>

                    </Row>


                </Form>
            )}







            <Table
                columns={columns}
                dataSource={dados}
                rowKey="key"
                pagination={{ pageSize: 10 }}
                bordered
            />

            <Modal
                open={isModalOpen}
                title="Confirmar exclusão"
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Sim"
                cancelText="Não"
            >
                Tem certeza que deseja excluir este eleitor?
            </Modal>
        </Mainlayout>
    );
};

export default Produtos;
