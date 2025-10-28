import { useEffect, useState } from "react";
import { clientList, deleteClient, getProfile } from "../Service/clientService.js";
import Figure from 'react-bootstrap/Figure';
import { Button, ListGroup } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import NavBar from "../Component/Navbar.jsx";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Chip, User } from "@heroui/react";


export const EyeIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 20 20"
            width="1em"
            {...props}
        >
            <path
                d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const DeleteIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 20 20"
            width="1em"
            {...props}
        >
            <path
                d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M8.60834 13.75H11.3833"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M7.91669 10.4167H12.0834"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const EditIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 20 20"
            width="1em"
            {...props}
        >
            <path
                d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
            <path
                d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
            <path
                d="M2.5 18.3333H17.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

const ProfilePage = () => {

    const [profile, setProfile] = useState({
        nom: "",
        prenom: "",
        adresse: "",
        pays: "",
        email: "",
    });

    const [client, setClient] = useState([]);
    const [admin, setAdmin] = useState(false);

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token)
    const idClient = decodedToken.id;

    const fetchProfile = async (idClient) => {

        try {

            const response = await getProfile(idClient)
            // console.log(profil);

            setProfile(response.data)

        } catch (error) {

            console.error(error);

        }

    }

    const handleInputChange = (field, value) => {
        setProfile(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {

        const profileToSave = { ...profile, idClient };

        try {

            await usersService.updateInfoProfile(profileToSave);
            toast.success("Profil mis à jour", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/");

        } catch (error) {

            toast.error('erreur, impossible de sauvegarder vos modifications', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            console.error(error);
        }
    };

    const fetchList = async () => {

        try {

            const response = await clientList();
            setClient(response.data.client);
            console.log(response.data);

        } catch (error) {

            console.error("Error fetching data: ", error);

        }

    };

    // supprimer un employer directement avec un bouton 

    const handleDelete = async (idClient) => {

        try {

            await deleteClient(idClient)
            location.reload()

        } catch (error) {

            console.error("Erreur lors de la suppression", error);
            // console.log(error);

        }

    }

    const handleFicheClient = (idClient) => {

        console.log(idClient);
        navigate(`/Profile/${idClient}`)

    };

    useEffect(() => {

        fetchProfile();
        fetchList();

        if (token) {

            const decodedToken = jwtDecode(token);
            console.log(decodedToken);

            if (decodedToken.Role === 1) {

                setAdmin(true);

            }

            console.log("Admin status:", admin);

        }

    }, []);


    const renderCell = (client, columnKey) => {
        const cellValue = client[columnKey];

        switch (columnKey) {
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Fiche Client">
                            <span
                                className="text-xs p-1 rounded-md hover:bg-default-100 text-default-400 cursor-pointer active:opacity-50"
                                onClick={() => handleFicheClient(client.idClient)}
                            >
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Supprimer Client">
                            <span
                                className="text-xs p-1 rounded-md hover:bg-danger-100 text-danger cursor-pointer active:opacity-50"
                                onClick={() => handleDelete(client.idClient)}
                            >
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default: return cellValue;
        }
    };

    return (

        <>
            <div className='NomSite'>

                <img src="src\assets\NomDuSite.png" alt="Nom du site" />

            </div>

            <div>

                <NavBar />

            </div>

            <div className="min-h-screen bg-background">
                <header className="bg-card border-b border-border p-4">
                    <div className="flex items-center space-x-4">
                        <Link to="/dashboard">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <h1 className="text-xl font-semibold">Modifier mon profil</h1>
                    </div>
                </header>

                <main className="max-w-2xl mx-auto p-4 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Informations personnelles</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="Nom">Nom</Label>
                                    <Input
                                        id="nom"
                                        value={profile.nom}
                                        onChange={(e) => handleInputChange("nom", e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="prenom">Prenom</Label>
                                    <Input
                                        id="prenom"
                                        value={profile.prenom}
                                        onChange={(e) => handleInputChange("prenom", e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        value={profile.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="adresse">Adresse</Label>
                                    <Input
                                        id="adresse"
                                        value={profile.adresse}
                                        onChange={(e) => handleInputChange("adresse", e.target.value)}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Button onClick={handleSave} className="w-full">
                        <Save className="h-4 w-4 mr-2" />
                        Sauvegarder les modifications
                    </Button>
                </main>
            </div>

            {admin && (
                <div className="TableauClient">
                    <Table aria-label="Liste des utilisateurs">
                        <TableHeader columns={columns}>
                            {(column) => (
                                <TableColumn
                                    key={column.uid}
                                    align={column.uid === "actions" ? "center" : "start"}
                                >
                                    {column.name}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody items={client}>
                            {(item) => (
                                <TableRow key={item.idClient}>
                                    {(columnKey) => (
                                        <TableCell>{renderCell(item, columnKey)}</TableCell>
                                    )}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            )}

        </>

    )

}

export default ProfilePage;