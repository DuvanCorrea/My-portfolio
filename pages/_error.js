
import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
    return (
        <Layout title="Something Goes Wrong" footer={false}>
            <p className="text-center">
                {statusCode
                    ? `No se pudo cargar la información del usuario: Status code ${statusCode}`
                    : "No se pudo cargar esta pagina, Disculpanos :(."}
            </p>
        </Layout>
    );
};

export default _error;