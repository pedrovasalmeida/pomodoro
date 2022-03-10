import NextNProgress from 'nextjs-progressbar';
import { DarkTheme } from 'styles/theme';

export default function RouteProgressBar() {
  return (
    <NextNProgress
      color={DarkTheme.colors.pink}
      startPosition={0.7}
      height={4}
      options={{
        minimum: 0,
        easing: 'linear',
        speed: 250,
        showSpinner: false,
      }}
    />
  );
}
