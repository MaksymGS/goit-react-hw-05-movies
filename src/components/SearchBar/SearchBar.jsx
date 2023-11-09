import { Formik } from 'formik';
import { SearchButton, StyledForm, StyledInput } from './SearchBar.styled';

export const SearchBar = ({ onChangeQuery }) => {
  return (
    <Formik
      initialValues={{
        searchQuery: '',
        //   page: 1,
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
          // autoComplete="off"
          // autoFocus
          placeholder="Search movies"
        />
        <SearchButton type="submit">ok</SearchButton>
      </StyledForm>
    </Formik>
  );
};
