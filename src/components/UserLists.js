import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


const UserList = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://reqres.in/api/users?page=1')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data.data);
                    console.log("data is", data)
                })
        }, 1000);
    }, [])

    return (
        <div className="home">
            {isPending && <div style={{ marginTop: "10%" }}> <CircularProgress /></div>}
            <div class="row" style={{ marginTop: "3%", marginLeft: "3%" }}>
                {
                    data && data.map(users =>
                        <div class="col-md-4" key={users.id}>
                            <Card style={{ marginTop: "10%", maxWidth: 300, }} >
                                <CardActionArea>
                                    <CardMedia style={{ height: 300, }}

                                        image={users.avatar}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            User Id: {users.id}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Name: {users.first_name} {users.last_name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Email: {users.email}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default UserList;