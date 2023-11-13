import { Formik } from 'formik';
import { SearchButton, StyledForm, StyledInput } from './SearchBar.styled';
import { FcSearch } from "react-icons/fc";

export const SearchBar = ({ onChangeQuery }) => {
  return (
    <Formik
      initialValues={{
        searchQuery: '',
      }}
      onSubmit={(values, actions) => {
        onChangeQuery(values.searchQuery);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledInput
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchButton type="submit"><FcSearch size={36}/></SearchButton>
      </StyledForm>
    </Formik>
  );
};
