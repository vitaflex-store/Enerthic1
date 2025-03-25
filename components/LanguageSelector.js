import { useRouter } from 'next/router';

export default function LanguageSelector() {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <select onChange={changeLanguage} defaultValue={router.locale}>
      <option value="de">Deutsch</option>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
}