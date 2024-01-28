import {createText} from '@shopify/restyle';

export const SRText = createText();

type SRTextProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  bold?: boolean;
  italic?: boolean;
  thin?: boolean;
  isLoading?: boolean;
}
