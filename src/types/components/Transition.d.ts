declare namespace Transition {
  type Animation = 'fadeIn' | 'fadeInUp' | 'fadeOut';

  type Timing =
    | number
    | {
        enter?: number;
        exit?: number;
      };

  interface Props {
    children: React.Node;
    delay?: Timing;
    duration?: Timing;
    in: boolean;
    enter?: Animation;
    exit?: Animation;
    timeout: Timing;
  }
}
