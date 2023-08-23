import styled from '@emotion/styled'
import { Pagination, Grid } from '@mui/material'

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: #007BFF;
  &:hover {
    text-decoration: underline;
  }
`

export const GlassContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top:60px;
`

export const StyledGrid = styled(Grid)`
  display: flex;
  justify-content:center;

  & .MuiGrid-item {
    display: flex;
    flex-direction: column;
  }

  & .MuiCard-root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  & .MuiCardContent-root {
    flex: 1;
  }
`

export const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`

export const StyledPagination = styled(Pagination)`
  display:flex;
  justify-content:center;
  & ul {
    margin:20px auto;
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;
`

export const StyledTextField = styled.input`
  flex: 1;
  padding: 10px 20px;
  border: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  outline: none;
`

export const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #1976d2;
  color: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1565c0;
  }
`

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  height: 100%;
`

export const MovieCardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
