const SESSION_KEY = 'ticketapp_session';

export function isAuthenticated(){
  return !!localStorage.getItem(SESSION_KEY);
}

export function getSession(){
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; }
}

export function loginMock(email, password){
  if(!email || !password) throw new Error('Invalid credentials');
  const token = 'mock-token-' + Math.random().toString(36).slice(2);
  const session = { token, user: { email, name: 'EMIRATE' }, createdAt: Date.now() };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function signupMock(email, password){
  return loginMock(email, password);
}

export function logout(){
  localStorage.removeItem(SESSION_KEY);
}
