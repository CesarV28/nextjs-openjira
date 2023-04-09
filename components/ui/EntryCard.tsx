import { DragEvent, FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"

import { UIContext } from '@/context/ui';

import { dateFunctions } from '@/utils';

import { Entry } from "@/interfaces";


interface Props {
  entry: Entry;
}

export const EntryCard:FC<Props> = ({ entry }) => {

  const { startDragging, endDragging } = useContext( UIContext );

  const router = useRouter()

  const onDragStart = ( event: DragEvent ) => {

    event.dataTransfer.setData('text', entry._id! );

    startDragging();

  }

  const onDragEnd = ( event: DragEvent<HTMLDivElement> ) => {
    endDragging(); 
  }

  const onClickCard = () => {
    router.push(`/entries/${ entry._id }`)
  }

  return (
    <Card
      onClick={ onClickCard }
      sx={{ marginBottom: 1 }}
      draggable={ true }
      onDragStart={ onDragStart }
      onDragEnd={ onDragEnd }
    > 
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line '}} >{ entry.description }</Typography>
        </CardContent>
        <CardActions sx={{ display: 'felx', justifyContent: 'end', padding: 2}}>
          <Typography variant="body2">{ dateFunctions.getFormatDistanceToNow(entry.createdAt) }</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
