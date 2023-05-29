import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context/global';

function WatchList() {
  const { watchlist } = useGlobalContext();

  return (
    <WatchListStyled>

                
      <h1>My WatchList</h1>
      <div className="anime-list">
        {watchlist.length > 0 ? (
          watchlist.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <div className="anime">
                <img src={anime.images.jpg.large_image_url} alt="" />
                <h4>{anime.title}</h4>
              </div>
            </Link>
          ))
        ) : (
          <p>Your WatchList empty</p>
        )}
      </div>
    </WatchListStyled>
  );
}

const WatchListStyled = styled.div`
  padding: 3rem 18rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .anime-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;

    .anime {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      img {
        width: 100%;
        border-radius: 5px;
      }

      h4 {
        font-size: 1.2rem;
        text-align: center;
      }
    }
  }
`;

export default WatchList;
