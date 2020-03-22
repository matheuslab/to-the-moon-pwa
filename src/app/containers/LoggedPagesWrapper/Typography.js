import MUITypography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Typography = styled(MUITypography)`
  text-decoration: ${({ textDecoration }) => (textDecoration ? `${textDecoration}` : 'initial')};
`;

export default Typography;
