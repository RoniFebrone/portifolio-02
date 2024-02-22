
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions} from '@mui/material';
import '@mui/material/styles';
import ButtonComponent from '../../Components/Button/ButtonComponent';


import './index.scss'

interface CardProps {
    img: string,
    title: string,
    description: string,
    repo: string,
    site: string
}

export default function MultiActionAreaCard({ img, title, description, repo, site }: CardProps) {
    return (
        <Card sx={{
            width: 450,
            height: 500,
            MaxWidth: 450,
            MaxHeight: 550,

            backgroundColor: '#0F1624',
            color: 'white',
            borderRadius: '50px 0 50px 0',
            boxShadow: '0px 0px 12px 0px rgba(255, 255, 255, 0.75)',
            padding: '25px',
        }}>

            <CardActionArea >
                <a href={site} target="_blank">
                    <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt="Error"
                        style={{ borderRadius: '20px' }}
                    />
                </a>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', fontFamily: 'Poppins', fontWeight: 600 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" style={{
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        overflowX: 'hidden',
                        overflowY: 'auto',
                        maxHeight: 170,
                        maxWidth: 450,
                        wordWrap: 'break-word',
                        scrollbarWidth: 'none',
                        
                    }}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <div className="styleButtonComponent">
                    <ButtonComponent text='Clique aqui' link={repo}/>
                </div>
            </CardActions>
        </Card>
    );
}

