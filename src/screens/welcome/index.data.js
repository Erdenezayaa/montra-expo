import {useTranslation} from 'react-i18next';

export function useSlideData() {
  const {t} = useTranslation();
  const data = [
    {
      title: t('slides.1.title'),
      subtitle: t('slides.1.subtitle'),
      icon: 0,
    },
    {
      title: t('slides.2.title'),
      subtitle: t('slides.2.subtitle'),
      icon: 1,
    },
    {
      title: t('slides.3.title'),
      subtitle: t('slides.3.subtitle'),
      icon: 2,
    },
  ];

  return data;
}
