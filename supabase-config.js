// ==========================================
// CONFIGURAÇÃO DO SUPABASE
// ==========================================

const SUPABASE_URL = 'https://copapngdprukbhrfiwlh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvcGFwbmdkcHJ1a2JocmZpd2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5MzI4MjksImV4cCI6MjA5MzUwODgyOX0.Fn5V6Rkk42dAzrPVpvZ8uMzeFCLNItnk_x0EcsEeWz8';

// Inicializa o cliente do Supabase
// (A variável supabaseClient estará disponível globalmente para o index.html e admin.html)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
