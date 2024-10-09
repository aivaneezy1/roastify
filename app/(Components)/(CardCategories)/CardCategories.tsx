import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@/components/ui/button';

interface CategoriesCardProps {
    images: string;
    category: string;
    description: string;
    btn: string;
}

export default function CategoriesCard({ images, category, description, btn }: CategoriesCardProps) {
    return (
        <Card
            className="flex flex-col justify-between"
            sx={{ maxWidth: 345, height: 300 }}  // Set a fixed height
        >
            <CardMedia
                sx={{ height: 140 }} // Fixed image height
                image={images}
                title={category}
            />
            <CardContent className="overflow-hidden">
                <Typography gutterBottom variant="h5" component="div" className="truncate">
                    {category}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} className="line-clamp-3">
                    {description}
                </Typography>
            </CardContent>
            <CardActions className="justify-center">
                <Button className="py-4 px-8">{btn}</Button>
            </CardActions>
        </Card>
    );
}
