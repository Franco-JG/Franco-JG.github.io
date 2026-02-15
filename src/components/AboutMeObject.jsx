import { Box, Typography } from "@mui/material";

const AboutMeObject = () => {
  return (
    <Box
      sx={{
        flex: { xs: '1', md: '0 1 45%' },
        maxWidth: { md: '580px', xs: '100%' },
        width: '100%',
        backgroundColor: 'rgba(30, 30, 60, 0.6)',
        borderRadius: '8px',
        p: { xs: 1.5, sm: 2 },
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        maxHeight: { xs: '400px', md: 'none' }
      }}
    >
      {/* Círculos de la barra de título */}
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#FF605C' }}></Box>
        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#FFBD44' }}></Box>
        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#00CA4E' }}></Box>
      </Box>

      {/* Código en formato de texto */}
      <Box
        sx={{
          fontFamily: 'monospace',
          color: '#f5f5f5',
          fontSize: { xs: '0.7rem', sm: '1rem' },
          lineHeight: 1.6,
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }}
      >
        <Typography component="div" sx={{ fontFamily: 'monospace', mb: 1, fontSize: 'inherit' }}>
          <span style={{ color: '#c586c0' }}>const</span> <span style={{ color: '#9cdcfe' }}>coder</span> <span style={{ color: '#c586c0' }}>=</span> {'{'}
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 2, fontSize: 'inherit' }}>
          <span style={{ color: '#9cdcfe' }}>name</span>: <span style={{ color: '#ce9178' }}>&apos;Geovani Franco&apos;</span>,
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 2, fontSize: 'inherit' }}>
          <span style={{ color: '#9cdcfe' }}>skills</span>: [
          <span style={{ color: '#ce9178' }}>&apos;Next.js&apos;</span>,
          <span style={{ color: '#ce9178' }}>&apos;REST APIs&apos;</span>,
          <span style={{ color: '#ce9178' }}>&apos;PostgreSQL&apos;</span>,
          <span style={{ color: '#ce9178' }}>&apos;Docker&apos;</span>,
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 4, fontSize: 'inherit' }}>

          <span style={{ color: '#ce9178' }}>&apos;Bubble&apos;</span>,
          <span style={{ color: '#ce9178' }}>&apos;Tableau&apos;</span>,
          <span style={{ color: '#ce9178' }}>&apos;Blender&apos;</span>,
          <span style={{ color: '#c586c0' }}>...</span>
          <span style={{ color: '#9cdcfe' }}>learning</span>],
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 2, fontSize: 'inherit' }}>
          <span style={{ color: '#9cdcfe' }}>hardWorker</span>: <span style={{ color: '#569cd6' }}>true</span>,
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 2, fontSize: 'inherit' }}>
          <span style={{ color: '#9cdcfe' }}>quickLearner</span>: <span style={{ color: '#569cd6' }}>true</span>,
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 2, fontSize: 'inherit' }}>
          <span style={{ color: '#9cdcfe' }}>problemSolver</span>: <span style={{ color: '#569cd6' }}>true</span>,
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 2, fontSize: 'inherit' }}>
          <span style={{ color: '#9cdcfe' }}>hireable</span>: <span style={{ color: '#dcdcaa' }}>function</span>() {'{'}
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 4, fontSize: 'inherit' }}>
          <span style={{ color: '#c586c0' }}>return</span> (
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 6, fontSize: 'inherit' }}>
          <span style={{ color: '#569cd6' }}>this</span>.<span style={{ color: '#9cdcfe' }}>hardWorker</span> <span style={{ color: '#d4d4d4' }}>&amp;&amp;</span>
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 6, fontSize: 'inherit' }}>
          <span style={{ color: '#569cd6' }}>this</span>.<span style={{ color: '#9cdcfe' }}>problemSolver</span>
        </Typography>

        {/* <Typography component="div" sx={{ fontFamily: 'monospace', pl: 6, fontSize: 'inherit' }}>
              <span style={{ color: '#569cd6' }}>this</span>.<span style={{ color: '#9cdcfe' }}>skills</span>.<span style={{ color: '#9cdcfe' }}>length</span> <span style={{ color: '#d4d4d4' }}>&gt;=</span> <span style={{ color: '#b5cea8' }}>5</span>
            </Typography> */}

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 4, fontSize: 'inherit' }}>
          );
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', pl: 2, fontSize: 'inherit' }}>
          {'}'}
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'monospace', fontSize: 'inherit' }}>
          {'};'}
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutMeObject;